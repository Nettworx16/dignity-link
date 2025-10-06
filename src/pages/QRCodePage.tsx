import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Download, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const QRCodePage = () => {
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
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Your Personal QR Code</h1>
            <p className="text-muted-foreground text-lg">
              For emergency responders to access your DNR and living will
            </p>
          </div>

          <Card className="text-center">
            <CardHeader>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              </div>
              <CardTitle>Wearable Device QR Code</CardTitle>
              <CardDescription>
                Scan this code to access authorized patient directives
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-card border-4 border-primary rounded-2xl p-8 inline-block">
                <div className="bg-background p-4 rounded-lg">
                  {/* QR Code SVG representation */}
                  <svg
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                    className="mx-auto"
                  >
                    {/* Simplified QR code pattern */}
                    <rect width="256" height="256" fill="white" />
                    {/* Corner markers */}
                    <rect x="20" y="20" width="60" height="60" fill="black" />
                    <rect x="30" y="30" width="40" height="40" fill="white" />
                    <rect x="40" y="40" width="20" height="20" fill="black" />
                    
                    <rect x="176" y="20" width="60" height="60" fill="black" />
                    <rect x="186" y="30" width="40" height="40" fill="white" />
                    <rect x="196" y="40" width="20" height="20" fill="black" />
                    
                    <rect x="20" y="176" width="60" height="60" fill="black" />
                    <rect x="30" y="186" width="40" height="40" fill="white" />
                    <rect x="40" y="196" width="20" height="20" fill="black" />
                    
                    {/* Data pattern (simplified) */}
                    <rect x="100" y="100" width="10" height="10" fill="black" />
                    <rect x="120" y="100" width="10" height="10" fill="black" />
                    <rect x="110" y="110" width="10" height="10" fill="black" />
                    <rect x="100" y="120" width="10" height="10" fill="black" />
                    <rect x="130" y="120" width="10" height="10" fill="black" />
                    <rect x="140" y="100" width="10" height="10" fill="black" />
                    <rect x="140" y="120" width="10" height="10" fill="black" />
                    <rect x="150" y="110" width="10" height="10" fill="black" />
                    
                    {/* Medical cross icon in center */}
                    <rect x="115" y="128" width="26" height="8" fill="hsl(195, 85%, 45%)" />
                    <rect x="124" y="119" width="8" height="26" fill="hsl(195, 85%, 45%)" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-medium">Patient ID: LD-2024-001234</p>
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="medical" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download QR Code
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/responder-view">Preview Responder View</Link>
                </Button>
              </div>

              <div className="bg-muted rounded-lg p-4 text-left">
                <h4 className="font-semibold mb-2">Usage Instructions:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Print this QR code and attach to your medical wearable device</li>
                  <li>• Emergency responders can scan to access your directives</li>
                  <li>• Keep your information up to date for accuracy</li>
                  <li>• QR code remains valid until you update your information</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default QRCodePage;
