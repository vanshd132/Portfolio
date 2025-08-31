import { experience } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-experience">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-experience-subtitle">
            My professional journey in developing cutting-edge solutions and contributing to innovative projects.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-primary w-4 h-4 rounded-full border-4 border-background z-10"></div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="lg:text-right">
                    <Card className="bg-card p-6 rounded-lg border border-border hover-lift">
                      <CardContent className="p-0">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground" data-testid={`text-position-${index}`}>
                              {exp.position}
                            </h3>
                            <p className="text-primary font-medium" data-testid={`text-company-${index}`}>{exp.company}</p>
                            <p className="text-sm text-muted-foreground" data-testid={`text-duration-${index}`}>{exp.duration}</p>
                          </div>
                          
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2">
                                <span className="text-secondary mt-1">•</span>
                                <span data-testid={`text-achievement-${index}-${achIndex}`}>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="lg:flex lg:items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                      alt="Professional developer workspace" 
                      className="rounded-lg shadow-lg hover-lift"
                      data-testid={`img-experience-${index}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
