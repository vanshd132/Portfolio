import { personalInfo } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MessageCircle, ArrowDown } from "lucide-react";
import AnimatedBackground from "./animated-background";

export default function HeroSection() {
  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/Vansh_Resume.pdf';
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

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <AnimatedBackground />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Name and Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider" data-testid="text-greeting">
              Hi, my name is
            </p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              <span className="block" data-testid="text-name">
                {personalInfo.name.split(' ')[0]}
              </span>
              <span className="block text-primary">
                {personalInfo.name.split(' ')[1]}
              </span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-introduction">
              {personalInfo.introduction}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={downloadResume}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border border-border text-foreground px-6 py-3 rounded-lg hover:bg-muted transition-colors"
                data-testid="button-contact"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a 
                href={personalInfo.github} 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Side - PDF Viewer */}
          <div className="hidden lg:block">
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-xl">
              <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Resume Preview</span>
                <Button
                  onClick={downloadResume}
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              </div>
              <div className="overflow-hidden bg-white flex items-center justify-center" style={{ height: '600px' }}>
                <embed
                  src="/Vansh_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                  type="application/pdf"
                  className="w-full h-full"
                  title="Resume Preview"
                  data-testid="resume-embed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Button */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer hidden lg:block"
        onClick={scrollDown}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Scroll down</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}
