import { personalInfo } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/VanshResume_1756625744456.pdf'; // This would be served from public folder
    link.download = 'Vansh_Dawra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <p className="text-secondary font-medium" data-testid="text-greeting">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                <span className="block" data-testid="text-name">{personalInfo.name}</span>
                <span className="block text-primary" data-testid="text-title">{personalInfo.title}</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-introduction">
                {personalInfo.introduction}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={downloadResume}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors duration-300"
                data-testid="button-contact"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href={personalInfo.github} 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                data-testid="link-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                data-testid="link-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace" 
              className="rounded-2xl shadow-2xl hover-lift"
              data-testid="img-hero"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
