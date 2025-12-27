import { ArrowRight, BookOpen, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogHero = () => {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[70vh] flex items-center">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/80">IAT Technologies Blog</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Your Gateway to{" "}
              <span className="text-accent">IT Career</span>{" "}
              Success
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
              Discover expert insights, industry trends, and practical guidance to accelerate your journey in the tech world. From career advice to cutting-edge technologies, we share knowledge that transforms careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Our Blogs
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="heroOutline" className="px-8 py-6 text-lg">
                Browse Courses
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">50+</p>
                  <p className="text-sm text-primary-foreground/60">Articles</p>
                </div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">10K+</p>
                  <p className="text-sm text-primary-foreground/60">Readers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl transform rotate-6" />
            <div className="relative bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-3xl p-8 border border-primary-foreground/10 backdrop-blur-sm">
              <div className="space-y-6">
                {[
                  { icon: "01", title: "Career Guidance", desc: "Navigate your IT career path" },
                  { icon: "02", title: "Industry Insights", desc: "Stay ahead with tech trends" },
                  { icon: "03", title: "Placement Tips", desc: "Land your dream job" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-foreground">{item.title}</h3>
                      <p className="text-sm text-primary-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default BlogHero;