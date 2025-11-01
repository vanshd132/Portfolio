import { personalInfo, education } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-2">
          About
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed" data-testid="text-journey-1">
              Currently pursuing my Bachelor of Technology in Information Technology at Indian Institute of Information Technology Una 
              with a CGPA of 7.2. I'm passionate about creating scalable web applications and exploring the intersection of 
              technology and user experience.
            </p>
            <p className="text-foreground leading-relaxed" data-testid="text-journey-2">
              My experience spans full-stack development, AI/ML integration, and building production-scale applications. 
              I've worked on projects ranging from healthcare platforms to object detection systems, always focusing on 
              creating meaningful solutions that make a difference.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4" data-testid="heading-education">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <p className="font-semibold text-foreground" data-testid={`text-degree-${index}`}>{edu.degree}</p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-institution-${index}`}>{edu.institution}</p>
                  <div className="flex gap-4 mt-1 text-sm">
                    <span className="text-primary font-medium" data-testid={`text-grade-${index}`}>{edu.grade}</span>
                    <span className="text-muted-foreground" data-testid={`text-duration-${index}`}>{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
