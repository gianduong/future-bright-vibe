import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Calendar } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-title text-center animate-fade-in-up">
          Connect with me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Email Me</h3>
            <p className="text-sm text-muted-foreground mb-4">Let's discuss your next project</p>
            <Button variant="outline" size="sm">Send Email</Button>
          </Card>

          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">Quick questions? Let's chat!</p>
            <Button variant="outline" size="sm">Start Chat</Button>
          </Card>

          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Schedule</h3>
            <p className="text-sm text-muted-foreground mb-4">Book a meeting with me</p>
            <Button variant="outline" size="sm">Book Call</Button>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            I'm always excited to work on new projects and meet new people. Don't hesitate to reach out!
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            Get In Touch 🚀
          </Button>
        </div>
      </div>
    </section>
  );
};