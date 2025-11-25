import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Tailored, client-focused solutions",
  "Professional expertise across multiple business disciplines",
  "Scalable services suited for small, medium, and growing enterprises",
  "Holistic approach integrating strategy, operations, people, and performance",
  "Commitment to long-term business success and sustainability"
];

const targetMarket = [
  "Small and medium-sized businesses",
  "Start-ups and entrepreneurs",
  "Corporate leaders and executives",
  "Organisations seeking HR, operational, or strategic improvement",
  "Businesses requiring mentorship, administrative or financial support"
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 px-4 bg-accent">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              Why Choose Wired Business and Advisory?
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe that each business is unique. That's why we focus on tailored, 
              hands-on, and results-driven approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6 space-y-6">
                <h3 className="text-2xl font-bold">Our Advantages</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 space-y-6">
                <h3 className="text-2xl font-bold">Who We Serve</h3>
                <ul className="space-y-4">
                  {targetMarket.map((target, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{target}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
