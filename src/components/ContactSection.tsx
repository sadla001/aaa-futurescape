import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your child's learning journey? Contact us today!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-all scale-in">
              <CardContent className="pt-8 pb-6">
                <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <a
                  href="tel:6822359041"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  951-544-6778
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-8 pb-6">
                <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a
                  href="mailto:info@aaatutions.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  info@aaatutions.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-8 pb-6">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground">Available Online & In-Person</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="hover:scale-105 transition-transform"
              asChild
            >
              <a href="tel:6822359041">Call Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-transform"
              asChild
            >
              <a href="https://wa.me/919963967821" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
