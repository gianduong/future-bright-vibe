import { SkillCard } from "./SkillCard";

// Skill icons using CSS classes for tech logos
const SkillIcon = ({ tech }: { tech: string }) => {
  const getIcon = (technology: string) => {
    const iconMap: Record<string, string> = {
      'C#': '🔹',
      'JavaScript': '🟨',
      'PHP': '🟣', 
      'TypeScript': '🔵',
      'Java': '☕',
      'React': '⚛️',
      'Vue': '💚',
      'Tailwind': '🎨',
      'Sass': '🌸',
      'Node.js': '🟢',
      'Angular': '🔴',
      'Redis': '📦',
      'Spring': '🍃',
      'AWS': '☁️',
      'Kubernetes': '⚙️',
      'Jenkins': '🔧',
      'Figma': '🎨',
      'Git': '📝'
    };
    
    return iconMap[technology] || '⚡';
  };

  return (
    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-2xl shadow-glow">
      {getIcon(tech)}
    </div>
  );
};

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C#", category: "Backend" },
        { name: "JavaScript", category: "Full Stack" },
        { name: "PHP", category: "Backend" },
        { name: "TypeScript", category: "Full Stack" },
        { name: "Java", category: "Backend" }
      ]
    },
    {
      title: "Frontend Development", 
      skills: [
        { name: "React", category: "Library" },
        { name: "Vue", category: "Framework" },
        { name: "Tailwind", category: "CSS" },
        { name: "Sass", category: "CSS" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", category: "Runtime" },
        { name: "Angular", category: "Framework" },
        { name: "Redis", category: "Database" },
        { name: "Spring", category: "Framework" }
      ]
    },
    {
      title: "DevOps Tools",
      skills: [
        { name: "AWS", category: "Cloud" },
        { name: "Kubernetes", category: "Orchestration" },
        { name: "Jenkins", category: "CI/CD" }
      ]
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Figma", category: "Design" },
        { name: "Git", category: "Version Control" }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-center animate-fade-in-up">
          Skills and Tools
        </h2>
        
        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-accent">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={<SkillIcon tech={skill.name} />}
                    category={skill.category}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};