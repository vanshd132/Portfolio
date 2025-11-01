import { achievements } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Trophy, Code } from "lucide-react";

export default function AchievementsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "project":
        return <Lightbulb className="h-7 w-7 text-primary" />;
      case "competition":
        return <Trophy className="h-7 w-7 text-secondary" />;
      case "coding":
        return <Code className="h-7 w-7 text-accent" />;
      default:
        return <Lightbulb className="h-7 w-7 text-primary" />;
    }
  };

  const getIconBgColor = (type: string) => {
    switch (type) {
      case "project":
        return "bg-primary/10";
      case "competition":
        return "bg-secondary/10";
      case "coding":
        return "bg-accent/10";
      default:
        return "bg-primary/10";
    }
  };

  return (
    <section id="achievements" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-2" data-testid="heading-achievements">
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="border border-border rounded-lg p-5">
              <div className="flex items-start gap-3">
                <div className={`${getIconBgColor(achievement.type)} p-2 rounded-lg flex-shrink-0`}>
                  {getIcon(achievement.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1" data-testid={`text-achievement-title-${index}`}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-achievement-description-${index}`}>
                    {achievement.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2" data-testid={`text-achievement-duration-${index}`}>
                    {achievement.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
