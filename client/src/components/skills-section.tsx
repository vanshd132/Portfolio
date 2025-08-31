import { skills, additionalTechnologies } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

export default function SkillsSection() {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress') as HTMLElement;
            if (progressBar) {
              const width = progressBar.getAttribute('data-width');
              if (width) {
                progressBar.style.width = '0%';
                setTimeout(() => {
                  progressBar.style.width = width;
                }, 100);
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-skills">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-subtitle">
            My technical expertise spans across various programming languages, frameworks, and tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <Card key={category} className="bg-card p-6 rounded-lg border border-border hover-lift">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-foreground mb-4" data-testid={`heading-skill-category-${categoryIndex}`}>
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      ref={(el) => { skillRefs.current[categoryIndex * 10 + skillIndex] = el; }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground" data-testid={`text-skill-name-${categoryIndex}-${skillIndex}`}>
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground" data-testid={`text-skill-level-${categoryIndex}-${skillIndex}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          data-width={`${skill.level}%`}
                          data-testid={`progress-skill-${categoryIndex}-${skillIndex}`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center" data-testid="heading-additional-technologies">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTechnologies.map((tech, index) => (
              <Badge 
                key={tech} 
                variant={index % 3 === 0 ? "default" : index % 3 === 1 ? "secondary" : "outline"}
                className="text-sm"
                data-testid={`badge-additional-tech-${index}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
