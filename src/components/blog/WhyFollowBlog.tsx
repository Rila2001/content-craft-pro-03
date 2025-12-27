import { CheckCircle2, Lightbulb, Target, TrendingUp, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Expert Industry Insights",
    description: "Gain knowledge from trainers with 10+ years of real-world IT experience",
  },
  {
    icon: Target,
    title: "Career-Focused Content",
    description: "Every article is designed to help you advance in your IT career journey",
  },
  {
    icon: TrendingUp,
    title: "Latest Technology Trends",
    description: "Stay ahead with updates on emerging technologies and industry shifts",
  },
  {
    icon: Zap,
    title: "Practical Learning Tips",
    description: "Actionable advice you can apply immediately to your studies and work",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Content shaped by questions from 10,000+ students we have trained",
  },
];

const WhyFollowBlog = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Follow Our Blog
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Source for{" "}
              <span className="text-accent">IT Career Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The IAT Technologies blog is more than just articles. It is a carefully curated resource built on our experience training thousands of students and helping them secure rewarding IT careers. We share the same insights and strategies that power our software training courses.
            </p>

            <div className="space-y-4">
              {[
                "Direct connection to IAT training programs and courses",
                "Real success stories from our placed students",
                "Free resources complementing hands-on learning",
                "Regular updates aligned with industry requirements",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg ${
                    index === benefits.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFollowBlog;