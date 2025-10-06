import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, QrCode, User, Shield } from "lucide-react";

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LifeDirective</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/">Sign Out</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Patient Dashboard</h1>
            <p className="text-muted-foreground text-lg">
              Manage your end-of-life directives and access your personal QR code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-[var(--shadow-medical)] transition-all cursor-pointer">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>DNR Directive</CardTitle>
                <CardDescription>
                  Create or update your Do Not Resuscitate directive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="medical" className="w-full" asChild>
                  <Link to="/dnr-form">Manage DNR</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-medical)] transition-all cursor-pointer">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Living Will</CardTitle>
                <CardDescription>
                  Document your healthcare wishes and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="medical" className="w-full" asChild>
                  <Link to="/living-will-form">Manage Living Will</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-card flex items-center justify-center">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle>Your Personal QR Code</CardTitle>
                  <CardDescription>
                    Access your wearable device code for emergency responders
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="default" className="w-full md:w-auto" asChild>
                <Link to="/qr-code">View QR Code</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
