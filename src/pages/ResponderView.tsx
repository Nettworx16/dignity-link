import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, AlertCircle, User, FileText, Phone, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ResponderView = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-destructive bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-destructive" />
              <span className="text-xl font-bold">Emergency Access</span>
            </div>
            <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">
              RESPONDER VIEW
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Alert className="mb-6 border-destructive bg-destructive/5">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <AlertTitle className="text-lg font-bold">DNR Directive Active</AlertTitle>
            <AlertDescription className="text-base">
              This patient has a valid Do Not Resuscitate directive. Review all instructions carefully.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Patient ID</p>
                    <p className="font-bold">LD-2024-001234</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-bold text-success">Verified</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Updated</p>
                    <p className="font-bold">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-destructive/5 border-destructive">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  DNR Directive
                </CardTitle>
                <CardDescription>Do Not Resuscitate Order</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Patient Name:</p>
                  <p className="text-lg">John Michael Doe</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Date of Birth:</p>
                  <p>January 15, 1955</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Medical Conditions:</p>
                  <p className="text-sm">Advanced heart failure, COPD, diabetes type 2</p>
                </div>
                <div className="pt-2 border-t border-destructive/20">
                  <p className="text-sm font-semibold mb-1">Physician:</p>
                  <p>Dr. Sarah Martinez</p>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Living Will
                </CardTitle>
                <CardDescription>Healthcare Preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2">Healthcare Agent:</p>
                  <p>Mary Ann Doe (Spouse)</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Phone className="h-4 w-4" />
                    <span>(555) 987-6543</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2">Treatment Preferences:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-destructive">✗</span> No artificial nutrition/hydration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-destructive">✗</span> No mechanical ventilation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-destructive">✗</span> No dialysis treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-success">✓</span> Pain management & comfort care
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Additional Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                In the event of cardiac arrest or respiratory failure, I do not wish to receive CPR, 
                intubation, or any other life-sustaining interventions. I request that comfort measures 
                be provided, including pain management and emotional support. Please contact my healthcare 
                agent immediately in any emergency situation.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 flex gap-4">
            <Button variant="emergency" size="lg" className="flex-1">
              <Phone className="mr-2 h-5 w-5" />
              Contact Healthcare Agent
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">Exit View</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResponderView;
