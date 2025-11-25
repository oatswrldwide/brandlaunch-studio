import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  BookOpen, 
  TrendingUp, 
  GraduationCap, 
  Headphones 
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Executive Advisory & Mentorship",
    description: "Leadership coaching, strategy consulting, business performance reviews, and mentorship for entrepreneurs and emerging leaders.",
    features: [
      "Leadership coaching and development",
      "Strategy consulting for executives",
      "Business performance reviews",
      "Mentorship for emerging leaders"
    ]
  },
  {
    icon: Users,
    title: "Human Resources Solutions",
    description: "Comprehensive HR strategy, employee relations, recruitment solutions, and workplace culture development.",
    features: [
      "HR strategy and policy development",
      "Employee relations and compliance",
      "Recruitment and onboarding",
      "Performance management systems"
    ]
  },
  {
    icon: BookOpen,
    title: "Business Bookkeeping & Administration",
    description: "Professional bookkeeping, financial record management, and compliance support for streamlined operations.",
    features: [
      "Bookkeeping and financial records",
      "Invoicing and cashflow tracking",
      "Compliance support (CIPC, SARS)",
      "Business operational structuring"
    ]
  },
  {
    icon: TrendingUp,
    title: "Business Development & Strategy",
    description: "Strategic business planning, market analysis, process optimisation, and new venture development.",
    features: [
      "Business planning and growth strategies",
      "Market analysis and feasibility",
      "Process optimisation",
      "New venture development"
    ]
  },
  {
    icon: GraduationCap,
    title: "Skills Development & Training",
    description: "Training needs analysis, employee skills upliftment programmes, and professional development workshops.",
    features: [
      "Training needs analysis",
      "Skills upliftment programmes",
      "Learnership guidance",
      "Professional development workshops"
    ]
  },
  {
    icon: Headphones,
    title: "Ongoing Business Support",
    description: "Virtual business assistance, administrative support, operational improvement, and business systems setup.",
    features: [
      "Virtual business assistance",
      "Administrative support services",
      "Operational improvement",
      "Business systems setup"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">
            Our Service Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive, integrated business services tailored to your organisation's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
