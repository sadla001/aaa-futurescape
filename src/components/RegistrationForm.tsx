import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    parentPhone: "",
    parentEmail: "",
    subjects: [] as string[],
    message: "",
  });

  const subjects = ["Maths", "Computers", "AI Tools", "Abacus"];

  const handleSubjectChange = (subject: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      subjects: checked
        ? [...prev.subjects, subject]
        : prev.subjects.filter((s) => s !== subject),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.studentName || !formData.age || !formData.parentPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.subjects.length === 0) {
      toast({
        title: "Select Subjects",
        description: "Please select at least one subject.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Prepare email parameters
    const templateParams = {
      student_name: formData.studentName,
      age: formData.age,
      parent_phone: formData.parentPhone,
      parent_email: formData.parentEmail || "Not provided",
      subjects: formData.subjects.join(", "),
      message: formData.message || "No additional message",
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      toast({
        title: "Registration Successful! 🎉",
        description: "Thank you! Our team will contact you shortly.",
      });

      // Reset form
      setFormData({
        studentName: "",
        age: "",
        parentPhone: "",
        parentEmail: "",
        subjects: [],
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at info@aaatutions.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="scale-in shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Register Your Child for a Free Intro Session
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Start your child's journey to academic excellence today
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Name */}
                <div className="space-y-2">
                  <Label htmlFor="studentName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name of Student *
                  </Label>
                  <Input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData({ ...formData, studentName: e.target.value })
                    }
                    placeholder="Enter student's full name"
                    required
                  />
                </div>

                {/* Age/Grade */}
                <div className="space-y-2">
                  <Label htmlFor="age">Age or Grade/Standard *</Label>
                  <Input
                    id="age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g., 10 years or Grade 5"
                    required
                  />
                </div>

                {/* Parent Phone */}
                <div className="space-y-2">
                  <Label htmlFor="parentPhone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Parent's Phone Number *
                  </Label>
                  <Input
                    id="parentPhone"
                    type="tel"
                    value={formData.parentPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, parentPhone: e.target.value })
                    }
                    placeholder="Enter contact number"
                    required
                  />
                </div>

                {/* Parent Email */}
                <div className="space-y-2">
                  <Label htmlFor="parentEmail" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Parent's Email or WhatsApp Number
                  </Label>
                  <Input
                    id="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, parentEmail: e.target.value })
                    }
                    placeholder="Enter email or WhatsApp number"
                  />
                </div>

                {/* Subjects */}
                <div className="space-y-3">
                  <Label className="font-semibold">Preferred Subject(s) *</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {subjects.map((subject) => (
                      <div key={subject} className="flex items-center space-x-2">
                        <Checkbox
                          id={subject}
                          checked={formData.subjects.includes(subject)}
                          onCheckedChange={(checked) =>
                            handleSubjectChange(subject, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={subject}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {subject}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message / Additional Notes
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Any specific requirements or questions?"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg hover:scale-105 transition-transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
