import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] backdrop-blur-md border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-foreground/80 mb-2">
              © 2024 Roland Ortiz. All rights reserved.
            </p>
          </div>

         

          {/* Back to Top */}
          <Button 
            onClick={scrollToTop}
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2 hover-scale"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;