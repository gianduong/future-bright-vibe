import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, User, Briefcase, GraduationCap, Award } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/projects", label: "Projects", icon: Briefcase },
    { to: "/education", label: "Education", icon: GraduationCap },
    { to: "/certificates", label: "Certificates", icon: Award },
  ];

  const NavLink = ({ to, label, icon: Icon, className = "" }: { to: string; label: string; icon: any; className?: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link to={to}>
        <Button 
          variant={isActive ? "default" : "ghost"} 
          className={`w-full justify-start gap-2 ${className} ${isActive ? 'bg-gradient-primary text-primary-foreground' : ''}`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </Button>
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-xl font-bold text-primary-foreground">
              J9
            </div>
            <span className="font-bold text-lg">Jun9.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} {...item} />
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <NavLink key={item.to} {...item} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};