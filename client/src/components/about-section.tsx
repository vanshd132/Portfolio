import { personalInfo, education } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-about">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
            {personalInfo.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground" data-testid="heading-journey">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-journey-1">
              Currently pursuing my Bachelor of Technology in Information Technology at Indian Institute of Information Technology Una 
              with a CGPA of 7.2. I'm passionate about creating scalable web applications and exploring the intersection of 
              technology and user experience.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-journey-2">
              My experience spans full-stack development, AI/ML integration, and building production-scale applications. 
              I've worked on projects ranging from healthcare platforms to object detection systems, always focusing on 
              creating meaningful solutions that make a difference.
            </p>
            
            <Card className="bg-card p-6 rounded-lg border border-border">
              <CardContent className="p-0">
                <h4 className="font-semibold text-foreground mb-3" data-testid="heading-education">Education</h4>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-foreground" data-testid={`text-degree-${index}`}>{edu.degree}</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-institution-${index}`}>{edu.institution}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-primary" data-testid={`text-grade-${index}`}>{edu.grade}</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-duration-${index}`}>{edu.duration}</p>
                        </div>
                      </div>
                      {index < education.length - 1 && <hr className="border-border mt-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech background" 
              className="rounded-2xl shadow-xl hover-lift"
              data-testid="img-about"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
