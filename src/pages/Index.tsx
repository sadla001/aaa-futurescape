import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import AbacusAdvantageSection from "@/components/AbacusAdvantageSection";
import RegistrationForm from "@/components/RegistrationForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <AbacusAdvantageSection />
      <RegistrationForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
