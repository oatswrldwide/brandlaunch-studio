import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-accent">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              About Wired Business and Advisory
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine industry expertise with innovative thinking to support businesses at every 
              stage of growth. From executive advisory to HR, strategy, skills development, and 
              operational support, we deliver customised solutions designed to optimise performance 
              and drive sustainable success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a leading African advisory firm known for excellence, innovation, 
                  and value-driven business solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide holistic business consultancy services that empower organisations 
                  to operate effectively, grow sustainably, and compete confidently.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Our Values</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Integrity</li>
                  <li>• Excellence</li>
                  <li>• Innovation</li>
                  <li>• Client-Centricity</li>
                  <li>• Collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
