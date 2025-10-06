import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DNRForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    medicalConditions: "",
    physicianName: "",
    physicianContact: "",
    additionalInstructions: "",
    witnessName: "",
    witnessContact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "DNR Directive Saved",
      description: "Your Do Not Resuscitate directive has been securely saved.",
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
            <h1 className="text-4xl font-bold mb-2">DNR Directive Form</h1>
            <p className="text-muted-foreground text-lg">
              Complete your Do Not Resuscitate directive
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please provide your personal details for the DNR directive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Legal Name *</Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicalConditions">Known Medical Conditions</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => setFormData({ ...formData, medicalConditions: e.target.value })}
                    placeholder="List any relevant medical conditions..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Physician Information</CardTitle>
                <CardDescription>
                  Details of your primary care physician
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="physicianName">Physician Name</Label>
                    <Input
                      id="physicianName"
                      value={formData.physicianName}
                      onChange={(e) => setFormData({ ...formData, physicianName: e.target.value })}
                      placeholder="Dr. Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="physicianContact">Physician Contact</Label>
                    <Input
                      id="physicianContact"
                      type="tel"
                      value={formData.physicianContact}
                      onChange={(e) => setFormData({ ...formData, physicianContact: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>DNR Instructions</CardTitle>
                <CardDescription>
                  Specify any additional instructions for emergency responders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="additionalInstructions">Additional Instructions</Label>
                  <Textarea
                    id="additionalInstructions"
                    value={formData.additionalInstructions}
                    onChange={(e) => setFormData({ ...formData, additionalInstructions: e.target.value })}
                    placeholder="Any specific instructions for emergency medical personnel..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Witness Information</CardTitle>
                <CardDescription>
                  Details of a witness to your DNR directive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="witnessName">Witness Name</Label>
                    <Input
                      id="witnessName"
                      value={formData.witnessName}
                      onChange={(e) => setFormData({ ...formData, witnessName: e.target.value })}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="witnessContact">Witness Contact</Label>
                    <Input
                      id="witnessContact"
                      type="tel"
                      value={formData.witnessContact}
                      onChange={(e) => setFormData({ ...formData, witnessContact: e.target.value })}
                      placeholder="(555) 987-6543"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 flex gap-4">
              <Button type="submit" variant="medical" size="lg" className="flex-1">
                <Save className="mr-2 h-5 w-5" />
                Save DNR Directive
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

export default DNRForm;
