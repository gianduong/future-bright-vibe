import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  category: string;
  delay?: number;
}

export const SkillCard = ({ name, icon, category, delay = 0 }: SkillCardProps) => {
  return (
    <div 
      className="skill-card group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="skill-icon floating-element mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground text-sm mb-1">{name}</h3>
      <p className="text-xs text-muted-foreground">{category}</p>
    </div>
  );
};