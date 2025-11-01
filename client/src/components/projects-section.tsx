import { projects } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projectImages = [
    "/beyondChat2.png",
    "https://raw.githubusercontent.com/vanshd132/VisionForge/refs/heads/main/Work_images/Screenshot%202025-06-04%20231731.png",
    "/medchain.png",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300"
  ];

  return (
    <section id="projects" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-2">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors bg-card"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={projectImages[index]} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.links.github && project.links.github !== "#" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-black/80 text-white p-2 rounded-full hover:bg-black transition-colors backdrop-blur-sm"
                      data-testid={`button-project-github-${index}`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.links.demo && project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-black/80 text-white p-2 rounded-full hover:bg-black transition-colors backdrop-blur-sm"
                      data-testid={`button-project-demo-${index}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1" data-testid={`text-project-name-${index}`}>
                      {project.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono" data-testid={`text-project-duration-${index}`}>
                      {project.duration}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 6).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="text-xs px-2 py-0.5"
                      data-testid={`badge-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Achievement - Just show the first impactful one */}
                <p className="text-xs text-foreground leading-relaxed">
                  <span className="font-semibold">Key Impact: </span>
                  <span className="text-muted-foreground">{project.achievements[0]}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
