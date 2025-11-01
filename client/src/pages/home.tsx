import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import AchievementsSection from "@/components/achievements-section";
import SuccessfulProductsSection from "@/components/successful-products-section";
import ContactSection from "@/components/contact-section";
import StatsSection from "@/components/stats-section";
import { personalInfo } from "@/data/portfolio-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SuccessfulProductsSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <StatsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative bg-card border-t border-border py-8 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground" data-testid="text-footer-copyright">
              © 2025 {personalInfo.name}. Built with passion using React.js, Vite, and Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground mt-2" data-testid="text-footer-made-with">
              Designed and developed with ❤️ for the modern web.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
