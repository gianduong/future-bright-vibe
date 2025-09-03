import { Button } from "@/components/ui/button";
import { Github, Linkedin, Facebook, MapPin, Building } from "lucide-react";

export const ProfileHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 rounded-full border-4 border-primary/20 overflow-hidden floating-element mx-auto">
              <img 
                src="/lovable-uploads/c16b6da2-92f5-48fa-ac44-883e767e0bee.png"
                alt="Jun9 Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center glow-element">
              <span className="text-2xl">👋</span>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi <span className="inline-block animate-bounce">👋</span>, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Jun9</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary">
            Nguyễn Gian Duong
          </h2>

          <div className="bg-gradient-secondary bg-clip-text text-transparent text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Dev: SA, DevOps, FE, BE - Let's Build Something Epic 🚀
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm passionate about building scalable applications, automating workflows, and making complex problems simple with clean, efficient code. Let's create something impactful!
          </p>

          {/* Location and Company */}
          <div className="flex items-center justify-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Huong Mac, Tu Son, Bac Ninh</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>Omega</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" className="group">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Facebook className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Facebook
            </Button>
          </div>

          {/* CTA Button */}
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
            <span className="group-hover:scale-110 transition-transform">
              Let's Connect & Build Together 🚀
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};