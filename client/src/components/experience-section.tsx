import { experience } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const renderAchievement = (achievement: string) => {
    // Check if achievement contains a URL pattern
    const urlRegex = /(https?:\/\/[^\s)]+)/g;
    const parts = achievement.split(urlRegex);
    
    return parts.map((part, idx) => {
      const trimmedPart = part.trim();
      if (trimmedPart.match(/^https?:\/\//)) {
        // Clean URL - remove trailing punctuation if any
        const cleanUrl = trimmedPart.replace(/[.,;:!?)]+$/, '');
        return (
          <a
            key={idx}
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {cleanUrl}
          </a>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <section id="experience" className="py-16 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-2">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground" data-testid={`text-position-${index}`}>
                    {exp.position}
                  </h3>
                  {exp.company === "QuickIntell" ? (
                    <div>
                      <a
                        href="https://quickintell.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                        data-testid={`text-company-${index}`}
                      >
                        {exp.company}
                      </a>
                      <a
                        href="https://quickintell.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-primary hover:underline ml-2"
                      >
                        (quickintell.com)
                      </a>
                    </div>
                  ) : (
                    <p className="text-primary font-semibold" data-testid={`text-company-${index}`}>{exp.company}</p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-mono mt-1 sm:mt-0" data-testid={`text-duration-${index}`}>
                  {exp.duration}
                </p>
              </div>
              
              <ul className="space-y-2 text-sm text-foreground">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="leading-relaxed"
                    data-testid={`text-achievement-${index}-${achIndex}`}
                  >
                    • {renderAchievement(achievement)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
