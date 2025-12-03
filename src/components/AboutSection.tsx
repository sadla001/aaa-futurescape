import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Target } from "lucide-react";
import founderImage from "@/assets/image.png";

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

          {/* Founder Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Meet Our Founder
            </h3>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Founder Image */}
                  <div className="p-8 md:p-12">
                    <img
                      src={founderImage}
                      alt="Adlagatta Gangadhar - Founder"
                      className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Founder Bio */}
                  <div className="p-8 md:p-12 md:pl-0">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Adlagatta Gangadhar
                    </h4>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Adlagatta Gangadhar is the Headmaster of MPPS Ambedkarnagar, Telangana, and a pioneer in joyful, foundational math learning. Working with children from underprivileged backgrounds, he developed creative, low-cost teaching methods that transformed mathematics into a fun, visual, and confidence-building experience.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      His <span className="font-semibold text-foreground">Finger-Based Learning Method</span>, combined with Abacus training, helped students master concepts quickly, develop strong concentration, and achieve exceptional results—earning international recognition for their speed, accuracy, and memory skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
