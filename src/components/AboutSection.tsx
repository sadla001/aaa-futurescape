import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Industry Professionals",
      description: "Real software engineers and AI experts teaching your children",
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Personalized Guidance",
      description: "Friendly, patient, and customized learning approach",
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "World Record Holder",
      description: "Learn Abacus from an international champion",
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Future-Ready Skills",
      description: "Focus on confidence, discipline, and clear understanding",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AAA Abacus Tuition Classes is a modern learning institute run by experienced software engineers
              and AI professionals. We combine strong academic teaching with future-ready skills such as coding
              and AI literacy.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Why We're Different
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
