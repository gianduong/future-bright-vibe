import { ProfileHero } from "@/components/ProfileHero";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen pt-20">
      <ProfileHero />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
