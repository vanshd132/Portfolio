import { Code, Briefcase, Award, Users, FolderKanban } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          const increment = end / (duration * 60); // 60fps

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function StatCard({ icon, value, label, suffix, duration = 2 }: StatProps) {
  const numValue = parseInt(value);
  const isNumber = !isNaN(numValue);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary mb-1">
        {isNumber ? <AnimatedCounter value={numValue} suffix={suffix} duration={duration} /> : value}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      value: "250+",
      label: "Problems Solved",
      duration: 2
    },
    {
      icon: <Briefcase className="h-8 w-8 text-secondary" />,
      value: "3",
      label: "Major Projects",
      duration: 2
    },
    {
      icon: <FolderKanban className="h-8 w-8 text-accent" />,
      value: "5",
      label: "Minor Projects",
      duration: 2
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "3 Star",
      label: "CodeChef Rating",
      duration: 2
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-2">
          By The Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

