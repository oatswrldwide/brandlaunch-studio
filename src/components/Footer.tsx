import logo from "@/assets/wired-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Wired Business & Advisory" 
              className="h-16 w-auto brightness-0 invert"
            />
          </div>
          
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} Wired Business and Advisory. All rights reserved.
            </p>
            <p className="text-sm opacity-75">
              Empowering organisations with integrated, strategic business solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
