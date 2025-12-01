import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Code, Brain, Sparkles } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: <Calculator className="w-12 h-12 text-primary" />,
      title: "Mathematics (Grades 6-10)",
      features: [
        "Concept clarity",
        "Step-by-step guidance",
        "Exam preparation",
        "Doubt clearing sessions",
      ],
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Computer & Coding",
      features: [
        "Computer fundamentals",
        "Problem-solving logic",
        "Safe internet practices",
        "Python basics (optional advanced track)",
      ],
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "AI Tools for Students",
      features: [
        "Learn safe, smart AI usage",
        "Use AI for homework, research & creativity",
        "AI-assisted study techniques",
        "Future-ready digital skills",
      ],
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Abacus Training",
      features: [
        "Learn from a world-record holder",
        "Rapid calculation methods",
        "Concentration & memory boosting",
        "Fun and competitive sessions",
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Programs
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive learning paths designed for modern students
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 group scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
