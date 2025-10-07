-- Fix critical security issue: Restrict profile viewing to own profile only
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

CREATE POLICY "Users can view own profile"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Add INSERT policy for profiles (trigger-based creation with explicit policy)
CREATE POLICY "Users can create own profile"
  ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Add DELETE policy for profiles (GDPR compliance)
CREATE POLICY "Users can delete own profile"
  ON public.profiles
  FOR DELETE
  TO authenticated
  USING (auth.uid() = id);

-- Add admin-only RPC function for managing user roles (prevents client-side bypass)
CREATE OR REPLACE FUNCTION public.manage_user_role(
  target_user_id UUID,
  new_role app_role,
  action TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result JSONB;
  caller_is_admin BOOLEAN;
BEGIN
  -- Verify caller is admin
  caller_is_admin := public.has_role(auth.uid(), 'admin');
  
  IF NOT caller_is_admin THEN
    RAISE EXCEPTION 'Unauthorized: Admin role required';
  END IF;

  -- Validate action
  IF action NOT IN ('add', 'remove') THEN
    RAISE EXCEPTION 'Invalid action. Must be "add" or "remove"';
  END IF;

  -- Perform the action
  IF action = 'add' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (target_user_id, new_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  ELSIF action = 'remove' THEN
    DELETE FROM public.user_roles
    WHERE user_id = target_user_id AND role = new_role;
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'action', action,
    'role', new_role,
    'user_id', target_user_id
  );
EXCEPTION
  WHEN OTHERS THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', SQLERRM
    );
END;
$$;

-- Add RPC function for paginated user listing (prevents loading all users)
CREATE OR REPLACE FUNCTION public.get_admin_users(
  page_num INT DEFAULT 0,
  page_size INT DEFAULT 50,
  search_term TEXT DEFAULT ''
)
RETURNS TABLE (
  id UUID,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMPTZ,
  roles TEXT[]
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Verify caller is admin
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Unauthorized: Admin role required';
  END IF;

  RETURN QUERY
  SELECT 
    p.id,
    p.email,
    p.full_name,
    p.created_at,
    COALESCE(ARRAY_AGG(ur.role::TEXT) FILTER (WHERE ur.role IS NOT NULL), ARRAY[]::TEXT[]) as roles
  FROM public.profiles p
  LEFT JOIN public.user_roles ur ON p.id = ur.user_id
  WHERE 
    search_term = '' OR
    p.email ILIKE '%' || search_term || '%' OR
    p.full_name ILIKE '%' || search_term || '%'
  GROUP BY p.id, p.email, p.full_name, p.created_at
  ORDER BY p.created_at DESC
  LIMIT page_size
  OFFSET (page_num * page_size);
END;
$$;

-- Add comment to document profile creation flow
COMMENT ON TABLE public.profiles IS 'User profiles are created automatically via handle_new_user() trigger on signup. Manual INSERT is also permitted with proper authentication.';