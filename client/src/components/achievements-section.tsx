import { achievements } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Trophy, Code } from "lucide-react";

export default function AchievementsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "project":
        return <Lightbulb className="h-6 w-6 text-primary" />;
      case "competition":
        return <Trophy className="h-6 w-6 text-secondary" />;
      case "coding":
        return <Code className="h-6 w-6 text-accent" />;
      default:
        return <Lightbulb className="h-6 w-6 text-primary" />;
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
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-achievements">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-achievements-subtitle">
            Recognition and accomplishments that highlight my commitment to excellence and continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card p-6 rounded-lg border border-border hover-lift">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className={`${getIconBgColor(achievement.type)} p-3 rounded-lg`}>
                    {getIcon(achievement.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground" data-testid={`text-achievement-title-${index}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1" data-testid={`text-achievement-description-${index}`}>
                      {achievement.description}
                    </p>
                    <p className="text-xs text-accent font-medium mt-2" data-testid={`text-achievement-duration-${index}`}>
                      {achievement.duration}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
