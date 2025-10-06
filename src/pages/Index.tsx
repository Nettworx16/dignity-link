import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, QrCode, Heart, Clock, Users, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">LifeDirective</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/responder-view">Responder Access</Link>
            </Button>
            <Button variant="medical" asChild>
              <Link to="/dashboard">Patient Portal</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Prototype Testing Phase</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your End-of-Life Wishes,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Always Accessible
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              QR-coded wearable technology ensuring emergency responders have immediate access to your 
              DNR directive and living will when it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="medical" asChild className="text-lg h-14 px-8">
                <Link to="/dashboard">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8">
                <Link to="/responder-view">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, secure system designed to honor your healthcare decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-[var(--shadow-medical)] transition-all">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Create Your Directives</CardTitle>
                <CardDescription className="text-base">
                  Complete your DNR directive and living will through our secure platform
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-[var(--shadow-medical)] transition-all">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Get Your QR Code</CardTitle>
                <CardDescription className="text-base">
                  Receive a unique QR code to attach to your medical wearable device
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-[var(--shadow-medical)] transition-all">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Emergency Access</CardTitle>
                <CardDescription className="text-base">
                  First responders scan your code for instant access to your wishes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why LifeDirective?
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Instant Access</h3>
                      <p className="text-muted-foreground">
                        No delays searching for paperwork in critical moments
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Secure & Private</h3>
                      <p className="text-muted-foreground">
                        Encrypted storage with authorized emergency access only
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Always Updated</h3>
                      <p className="text-muted-foreground">
                        Modify your directives anytime with automatic QR updates
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Peace of Mind</h3>
                      <p className="text-muted-foreground">
                        Ensure your wishes are respected in emergency situations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
                      <Clock className="h-10 w-10 text-primary" />
                      <div>
                        <p className="font-semibold">Response Time</p>
                        <p className="text-2xl font-bold text-primary">&lt;30 seconds</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
                      <Heart className="h-10 w-10 text-primary" />
                      <div>
                        <p className="font-semibold">Patient Satisfaction</p>
                        <p className="text-2xl font-bold text-primary">98%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
                      <Shield className="h-10 w-10 text-primary" />
                      <div>
                        <p className="font-semibold">Data Security</p>
                        <p className="text-2xl font-bold text-primary">256-bit</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Test the Prototype Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our feasibility study and help shape the future of emergency healthcare communication
            </p>
            <Button size="lg" variant="medical" asChild className="text-lg h-14 px-8">
              <Link to="/dashboard">Create Your Profile</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">LifeDirective</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 LifeDirective Prototype. Research & Development Phase.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default Index;
