import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Brain, Target, TrendingUp } from "lucide-react";
import abacusIcon from "@/assets/abacus-icon.png";

const AbacusAdvantageSection = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Builds lifelong confidence",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Boosts memory and concentration",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Sharpens mental math speed",
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Improves academic performance",
    },
  ];

  return (
    <section id="abacus-advantage" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Abacus Matters for Your Child
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={abacusIcon}
                alt="Traditional Abacus"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg float"
              />
            </div>

            <div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <p className="text-lg font-medium text-foreground">
                        {benefit.title}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* World Record Highlight */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent border-primary/20 scale-in">
            <CardContent className="p-8 text-center">
              <Badge className="mb-4 text-lg px-4 py-2">
                <Trophy className="w-5 h-5 mr-2" />
                World Record Holder
              </Badge>
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                Our tutor holds an international world-record in Abacus while roller skating
              </p>
              <p className="text-lg text-muted-foreground">
                Inspiring young learners to push their limits and achieve excellence
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AbacusAdvantageSection;
