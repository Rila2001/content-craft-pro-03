import { ArrowUpRight, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const featuredBlogs = [
  {
    id: 1,
    title: "How to Choose the Right IT Course for Your Career",
    description: "Navigating the vast landscape of IT courses can be overwhelming. Learn the key factors to consider when selecting a training program that aligns with your career goals.",
    category: "Career",
    categoryColor: "career",
    readTime: "8 min read",
    author: "IAT Expert",
    featured: true,
  },
  {
    id: 2,
    title: "Top IT Skills in Demand for Future Jobs",
    description: "The tech industry evolves rapidly. Discover which skills employers are seeking and how mastering them can future-proof your career.",
    category: "Technology",
    categoryColor: "tech",
    readTime: "6 min read",
    author: "Tech Team",
    featured: false,
  },
  {
    id: 3,
    title: "Importance of Real-Time Projects in IT Training",
    description: "Theory alone does not build careers. Understand why hands-on project experience is crucial for becoming job-ready in the competitive IT market.",
    category: "Skills",
    categoryColor: "skills",
    readTime: "5 min read",
    author: "Training Lead",
    featured: false,
  },
  {
    id: 4,
    title: "Placement Preparation Tips for Freshers",
    description: "Your first job interview can be daunting. Get proven strategies and insider tips to ace interviews and secure your dream position.",
    category: "Placement",
    categoryColor: "placement",
    readTime: "7 min read",
    author: "Placement Cell",
    featured: false,
  },
  {
    id: 5,
    title: "Full Stack Development vs Data Analytics",
    description: "Two of the hottest career paths in IT. Compare both fields to determine which aligns better with your interests and career aspirations.",
    category: "Career",
    categoryColor: "career",
    readTime: "10 min read",
    author: "Career Advisor",
    featured: false,
  },
  {
    id: 6,
    title: "How Hands-On Learning Helps You Get Job-Ready",
    description: "Practical experience bridges the gap between academic knowledge and professional expectations. Learn how project-based learning accelerates your readiness.",
    category: "Skills",
    categoryColor: "skills",
    readTime: "5 min read",
    author: "IAT Expert",
    featured: false,
  },
];

const getCategoryClass = (color: string) => {
  const classes: Record<string, string> = {
    career: "bg-category-career/10 text-category-career border-category-career/30",
    tech: "bg-category-tech/10 text-category-tech border-category-tech/30",
    placement: "bg-category-placement/10 text-category-placement border-category-placement/30",
    skills: "bg-category-skills/10 text-category-skills border-category-skills/30",
    trends: "bg-category-trends/10 text-category-trends border-category-trends/30",
    interview: "bg-category-interview/10 text-category-interview border-category-interview/30",
  };
  return classes[color] || classes.career;
};

const FeaturedBlogs = () => {
  const mainFeatured = featuredBlogs.find(blog => blog.featured);
  const otherBlogs = featuredBlogs.filter(blog => !blog.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              Featured Articles
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Expert Insights for Your{" "}
              <span className="text-accent">IT Journey</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Curated content from industry experts to guide your path in software training and career development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main featured article */}
          {mainFeatured && (
            <article className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary via-primary/80 to-transparent">
                  <Badge className={`mb-4 ${getCategoryClass(mainFeatured.categoryColor)}`}>
                    {mainFeatured.category}
                  </Badge>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {mainFeatured.title}
                  </h3>
                  <p className="text-primary-foreground/70 line-clamp-2">
                    {mainFeatured.description}
                  </p>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {mainFeatured.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {mainFeatured.readTime}
                  </span>
                </div>
                <span className="text-accent font-medium group-hover:underline cursor-pointer">
                  Read Article
                </span>
              </div>
            </article>
          )}

          {/* Other articles grid */}
          <div className="grid gap-6">
            {otherBlogs.slice(0, 3).map((blog, index) => (
              <article
                key={blog.id}
                className="group flex gap-6 p-6 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-accent">
                    0{blog.id}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <Badge className={`mb-2 ${getCategoryClass(blog.categoryColor)}`}>
                    {blog.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {blog.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{blog.author}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {otherBlogs.slice(3).map((blog, index) => (
            <article
              key={blog.id}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <Badge className={`mb-4 ${getCategoryClass(blog.categoryColor)}`}>
                {blog.category}
              </Badge>
              <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {blog.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{blog.readTime}</span>
                <span className="text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Read More
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
