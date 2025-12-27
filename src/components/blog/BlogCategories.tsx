import { Briefcase, Code, Database, TestTube, Award, MessageSquare, Cpu } from "lucide-react";

const categories = [
  {
    icon: Briefcase,
    name: "Career Guidance",
    description: "Navigate your IT career path with expert advice on skill development, industry trends, and professional growth strategies.",
    color: "career",
    count: 12,
  },
  {
    icon: Code,
    name: "Programming & Development",
    description: "Deep dives into programming languages, frameworks, and development best practices for aspiring and experienced developers.",
    color: "tech",
    count: 18,
  },
  {
    icon: Database,
    name: "Data & Analytics",
    description: "Explore the world of data science, analytics tools, and how to leverage data for business intelligence and decision-making.",
    color: "skills",
    count: 9,
  },
  {
    icon: TestTube,
    name: "Software Testing",
    description: "Learn about quality assurance methodologies, testing frameworks, and automation techniques essential for modern software development.",
    color: "placement",
    count: 7,
  },
  {
    icon: Award,
    name: "Placement Support",
    description: "Get insider tips on resume building, interview preparation, and strategies to land your dream job in the IT industry.",
    color: "career",
    count: 15,
  },
  {
    icon: MessageSquare,
    name: "Interview Preparation",
    description: "Master technical and behavioral interviews with practice questions, mock scenarios, and confidence-building techniques.",
    color: "interview",
    count: 11,
  },
  {
    icon: Cpu,
    name: "Technology Trends",
    description: "Stay updated with emerging technologies, industry innovations, and future predictions shaping the IT landscape.",
    color: "trends",
    count: 8,
  },
];

const getIconColorClass = (color: string) => {
  const classes: Record<string, string> = {
    career: "bg-category-career/10 text-category-career",
    tech: "bg-category-tech/10 text-category-tech",
    placement: "bg-category-placement/10 text-category-placement",
    skills: "bg-category-skills/10 text-category-skills",
    trends: "bg-category-trends/10 text-category-trends",
    interview: "bg-category-interview/10 text-category-interview",
  };
  return classes[color] || classes.career;
};

const BlogCategories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Explore Topics
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find the content that matters most to your IT career journey. Each category is curated to provide actionable insights and practical knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <article
                key={category.name}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl ${getIconColorClass(category.color)} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                      {category.name}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {category.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border group-hover:border-accent/30 transition-colors duration-300">
                    <span className="text-sm font-medium text-accent flex items-center gap-2">
                      View Articles
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;