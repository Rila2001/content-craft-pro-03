import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const latestPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Starting Your IT Career in 2024",
    summary: "The technology sector continues to grow at an unprecedented pace, creating abundant opportunities for aspiring professionals. This comprehensive guide breaks down the essential steps to launch a successful IT career, from choosing the right specialization to building a portfolio that stands out to employers. Whether you are a fresh graduate or looking to switch careers, understanding the current landscape is your first step toward success.",
    date: "December 20, 2024",
    category: "Career Guidance",
  },
  {
    id: 2,
    title: "Why Practical Training Beats Traditional Education in IT",
    summary: "While theoretical knowledge forms the foundation, practical experience is what truly prepares you for the workplace. Employers increasingly value candidates who can demonstrate hands-on skills through real-time projects and industry-relevant work. Discover why job-oriented IT courses with practical training components deliver better career outcomes and how to identify programs that offer genuine hands-on learning opportunities.",
    date: "December 18, 2024",
    category: "Skills Development",
  },
  {
    id: 3,
    title: "Mastering Technical Interviews: A Complete Preparation Guide",
    summary: "Technical interviews can be challenging, but with the right preparation strategy, you can approach them with confidence. This guide covers everything from common coding questions to system design discussions, behavioral interview techniques, and salary negotiation tips. Learn from placement experts who have helped thousands of students secure positions at leading technology companies.",
    date: "December 15, 2024",
    category: "Interview Preparation",
  },
  {
    id: 4,
    title: "Cloud Computing Skills: Your Ticket to High-Paying Jobs",
    summary: "Cloud technologies have become the backbone of modern IT infrastructure, making cloud skills among the most sought-after in the job market. From AWS to Azure to Google Cloud, organizations are actively seeking professionals who can design, deploy, and manage cloud solutions. Explore the certifications that matter and the learning path to becoming a cloud expert.",
    date: "December 12, 2024",
    category: "Technology Trends",
  },
  {
    id: 5,
    title: "Building Your First Portfolio Project: Step-by-Step Guide",
    summary: "A strong portfolio is often the deciding factor in landing your first IT job. This practical guide walks you through creating an impressive portfolio project from scratch, covering everything from ideation to deployment. Learn how to showcase your skills effectively and create projects that demonstrate real-world problem-solving abilities to potential employers.",
    date: "December 10, 2024",
    category: "Skills Development",
  },
];

const LatestPosts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Latest Articles
                </h2>
                <p className="text-muted-foreground mt-2">
                  Fresh insights to fuel your IT career growth
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {latestPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group relative"
                >
                  <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                    {/* Number indicator */}
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-xl bg-primary items-center justify-center">
                      <span className="font-display text-2xl font-bold text-primary-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                      </div>

                      <h3 className="font-semibold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {post.summary}
                      </p>

                      <button className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" variant="outline" className="gap-2">
                Load More Articles
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">
            {/* Newsletter */}
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="font-display text-xl font-bold mb-3">
                Stay Updated
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Get the latest career tips and industry insights delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent mb-3"
              />
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>

            {/* Popular tags */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-semibold text-lg text-foreground mb-4">
                Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "IT Training",
                  "Placement",
                  "Full Stack",
                  "Data Analytics",
                  "Python",
                  "Java",
                  "Career Tips",
                  "Resume",
                  "Interview",
                  "Projects",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h3 className="font-semibold text-lg text-foreground mb-4">
                IAT Blog Stats
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Articles Published", value: "50+" },
                  { label: "Topics Covered", value: "7" },
                  { label: "Monthly Readers", value: "10K+" },
                  { label: "Expert Authors", value: "12" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-bold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;