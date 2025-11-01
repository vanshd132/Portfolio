import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessfulProductsSection() {
  const products = [
    {
      name: "Oflisting",
      description: "E-commerce platform serving international customers with multi-country order fulfillment. Successfully deployed and receiving orders from customers across multiple countries.",
      image: "/offlisting.png",
      url: "https://www.oflisting.com/",
      stats: {
        label: "Active Orders",
        value: "Multi-Country"
      }
    },
    {
      name: "Medical Report Digitizer",
      description: "RAG-based system that extracts information from handwritten prescriptions and lab reports. Built using sensitive data from 30,000+ handwritten prescriptions. Currently being used as API by various health tech companies.",
      image: "/MedicalReportDigitiser.png",
      url: "#",
      stats: {
        label: "Data Processed",
        value: "30,000+ Prescriptions"
      }
    }
  ];

  return (
    <section id="successful-products" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-2">
          Successful Products Made
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-all hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {product.url !== "#" && (
                  <div className="absolute top-4 right-4">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/80 text-white p-2 rounded-full hover:bg-black transition-colors backdrop-blur-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-semibold text-sm">✓ Live & Successful</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                    <p className="text-sm font-semibold text-foreground">{product.stats.label}: {product.stats.value}</p>
                  </div>
                  {product.url !== "#" && (
                    <Button
                      onClick={() => window.open(product.url, '_blank')}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Visit Site
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                  {product.url === "#" && (
                    <span className="text-xs text-muted-foreground font-medium">API Service</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

