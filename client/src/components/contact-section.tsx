import { useState } from "react";
import { personalInfo } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, this would send the form data to a backend service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-2" data-testid="heading-contact">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    data-testid="link-contact-email"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    data-testid="link-contact-phone"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium" data-testid="text-contact-location">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 pt-2">
              <a
                href={personalInfo.github}
                className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                data-testid="link-contact-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                data-testid="link-contact-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <Card className="border border-border">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    data-testid="input-contact-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-contact-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    data-testid="input-contact-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                    required
                    data-testid="textarea-contact-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  disabled={isSubmitting}
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
