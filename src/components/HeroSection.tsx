import { Button } from "@/components/ui/button";
import { Calculator, Code, Brain, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 fade-in-up">
            AAA ABACUS TUITION CLASSES
          </h1>
          <p className="text-2xl md:text-3xl text-accent mb-4 fade-in-up" style={{ animationDelay: "0.2s" }}>
            Where Strong Fundamentals Meet Modern Learning
          </p>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 fade-in-up" style={{ animationDelay: "0.4s" }}>
            Tutoring by Software Engineers & AI Experts
          </p>

          {/* Animated Icons */}
          <div className="flex justify-center gap-8 mb-12 fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex flex-col items-center float" style={{ animationDelay: "0s" }}>
              <Calculator className="w-12 h-12 text-primary mb-2" />
              <span className="text-primary-foreground font-medium">Maths</span>
            </div>
            <div className="flex flex-col items-center float" style={{ animationDelay: "0.2s" }}>
              <Code className="w-12 h-12 text-primary mb-2" />
              <span className="text-primary-foreground font-medium">Computers</span>
            </div>
            <div className="flex flex-col items-center float" style={{ animationDelay: "0.4s" }}>
              <Brain className="w-12 h-12 text-primary mb-2" />
              <span className="text-primary-foreground font-medium">AI Tools</span>
            </div>
            <div className="flex flex-col items-center float" style={{ animationDelay: "0.6s" }}>
              <Sparkles className="w-12 h-12 text-primary mb-2" />
              <span className="text-primary-foreground font-medium">Abacus</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => scrollToSection("registration")}
            >
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-card/50 hover:bg-card hover:scale-105 transition-transform"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
