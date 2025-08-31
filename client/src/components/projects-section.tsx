import { projects } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projectImages = [
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
    "https://pixabay.com/get/g840aaf3a4252dfe4485d22b89c339a47f4872d91ef9af823f2c0c245039987201bd3d31142a64c8131d0e63e35f1d822a432c404e84deb1fa0ecf68de24fb4a8_1280.jpg",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300"
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-projects">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            A collection of projects that showcase my skills in full-stack development, AI/ML integration, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card rounded-lg border border-border overflow-hidden hover-lift">
              <img 
                src={projectImages[index]} 
                alt={project.name} 
                className="w-full h-48 object-cover"
                data-testid={`img-project-${index}`}
              />
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground" data-testid={`text-project-name-${index}`}>
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-project-duration-${index}`}>
                      {project.duration}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant={techIndex % 3 === 0 ? "default" : techIndex % 3 === 1 ? "secondary" : "outline"}
                        className="text-xs"
                        data-testid={`badge-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <li key={achIndex} data-testid={`text-project-achievement-${index}-${achIndex}`}>
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="link" 
                      className="text-primary hover:text-primary/80 text-sm font-medium p-0"
                      data-testid={`button-project-demo-${index}`}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      View Demo
                    </Button>
                    <Button 
                      variant="link" 
                      className="text-muted-foreground hover:text-foreground text-sm p-0"
                      data-testid={`button-project-github-${index}`}
                    >
                      <Github className="mr-1 h-3 w-3" />
                      GitHub
                    </Button>
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
