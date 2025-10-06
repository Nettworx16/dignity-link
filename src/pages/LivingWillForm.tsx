import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LivingWillForm = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState({
    artificialNutrition: false,
    mechanicalVentilation: false,
    dialysis: false,
    antibiotics: false,
    painManagement: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Living Will Saved",
      description: "Your living will has been securely saved.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LifeDirective</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Living Will</h1>
            <p className="text-muted-foreground text-lg">
              Document your healthcare wishes and treatment preferences
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Healthcare Agent</CardTitle>
                <CardDescription>
                  Designate someone to make healthcare decisions on your behalf
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="agentName">Agent Name *</Label>
                    <Input id="agentName" required placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agentRelationship">Relationship *</Label>
                    <Input id="agentRelationship" required placeholder="Spouse" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="agentPhone">Phone Number *</Label>
                    <Input id="agentPhone" type="tel" required placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agentEmail">Email Address</Label>
                    <Input id="agentEmail" type="email" placeholder="agent@email.com" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Treatment Preferences</CardTitle>
                <CardDescription>
                  Select which life-sustaining treatments you would want in end-of-life scenarios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="artificialNutrition"
                    checked={preferences.artificialNutrition}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, artificialNutrition: checked as boolean })
                    }
                  />
                  <Label htmlFor="artificialNutrition" className="font-normal cursor-pointer">
                    Artificial nutrition and hydration (feeding tubes)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mechanicalVentilation"
                    checked={preferences.mechanicalVentilation}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, mechanicalVentilation: checked as boolean })
                    }
                  />
                  <Label htmlFor="mechanicalVentilation" className="font-normal cursor-pointer">
                    Mechanical ventilation (breathing machine)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="dialysis"
                    checked={preferences.dialysis}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, dialysis: checked as boolean })
                    }
                  />
                  <Label htmlFor="dialysis" className="font-normal cursor-pointer">
                    Dialysis treatment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="antibiotics"
                    checked={preferences.antibiotics}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, antibiotics: checked as boolean })
                    }
                  />
                  <Label htmlFor="antibiotics" className="font-normal cursor-pointer">
                    Antibiotics for life-threatening infections
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="painManagement"
                    checked={preferences.painManagement}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, painManagement: checked as boolean })
                    }
                  />
                  <Label htmlFor="painManagement" className="font-normal cursor-pointer">
                    Pain management and comfort care (always recommended)
                  </Label>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Additional Instructions</CardTitle>
                <CardDescription>
                  Any other wishes or instructions for your healthcare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Describe any specific wishes, values, or instructions for your healthcare providers..."
                  rows={6}
                />
              </CardContent>
            </Card>

            <div className="mt-8 flex gap-4">
              <Button type="submit" variant="medical" size="lg" className="flex-1">
                <Save className="mr-2 h-5 w-5" />
                Save Living Will
              </Button>
              <Button type="button" variant="outline" size="lg" asChild>
                <Link to="/dashboard">Cancel</Link>
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LivingWillForm;
