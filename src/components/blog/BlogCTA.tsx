import { ArrowRight, Calendar, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogCTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to Transform Your Career?</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Take the First Step Toward Your{" "}
            <span className="text-accent">Dream IT Career</span>
          </h2>

          <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Reading our blog is just the beginning. Join thousands of successful students who have transformed their careers through our career-focused training programs with placement assistance and real-time project experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
            >
              <Calendar className="w-5 h-5" />
              Book Free Demo Class
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Our Team
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/60">
            {[
              { value: "10,000+", label: "Students Trained" },
              { value: "90%", label: "Placement Rate" },
              { value: "50+", label: "Course Domains" },
              { value: "100%", label: "Placement Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80L80 70C160 60 320 40 480 35C640 30 800 40 960 45C1120 50 1280 50 1360 50L1440 50V80H1360C1280 80 1120 80 960 80C800 80 640 80 480 80C320 80 160 80 80 80H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default BlogCTA;