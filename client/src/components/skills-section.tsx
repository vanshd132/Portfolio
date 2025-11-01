import { skills } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, { border: string; title: string; badge: string }> = {
      "Programming Languages": {
        border: "border-blue-500/50",
        title: "text-blue-400",
        badge: "bg-blue-500/20 text-blue-300 border-blue-500/30"
      },
      "AI Concepts": {
        border: "border-purple-500/50",
        title: "text-purple-400",
        badge: "bg-purple-500/20 text-purple-300 border-purple-500/30"
      },
      "Web Development Stack": {
        border: "border-green-500/50",
        title: "text-green-400",
        badge: "bg-green-500/20 text-green-300 border-green-500/30"
      },
      "Databases": {
        border: "border-orange-500/50",
        title: "text-orange-400",
        badge: "bg-orange-500/20 text-orange-300 border-orange-500/30"
      },
      "Python Tools": {
        border: "border-yellow-500/50",
        title: "text-yellow-400",
        badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      },
      "Tools": {
        border: "border-cyan-500/50",
        title: "text-cyan-400",
        badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
      }
    };
    return colorMap[category] || { border: "border-border", title: "text-foreground", badge: "bg-muted text-foreground border-border" };
  };

  return (
    <section id="skills" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-2">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const colors = getCategoryColor(category);
            return (
              <div key={category} className={`border-2 ${colors.border} rounded-lg p-6 bg-card hover:shadow-lg transition-shadow`}>
                <h3 className={`text-lg font-semibold mb-4 ${colors.title}`} data-testid={`skill-category-${categoryIndex}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className={`text-xs px-3 py-1 font-normal border ${colors.badge}`}
                      data-testid={`skill-${categoryIndex}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
