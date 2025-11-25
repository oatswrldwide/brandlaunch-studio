import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business? Get in touch with us today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold">Email Us</h3>
                <a href="mailto:info@wiredbusiness.co.za" className="text-primary hover:underline block">
                  info@wiredbiz.co.za
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold">Call Us</h3>
                <a href="tel:+27123456789" className="text-primary hover:underline block">
                  ​+27 81 366 0538   
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold">Location</h3>
                <p className="text-muted-foreground">Johannesburg    </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-8">
            <Button size="lg" onClick={() => window.location.href = 'mailto:info@wiredbusiness.co.za'} className="text-lg px-8">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;