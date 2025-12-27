import { Helmet } from "react-helmet-async";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedBlogs from "@/components/blog/FeaturedBlogs";
import BlogCategories from "@/components/blog/BlogCategories";
import LatestPosts from "@/components/blog/LatestPosts";
import WhyFollowBlog from "@/components/blog/WhyFollowBlog";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogFooter from "@/components/blog/BlogFooter";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>IAT Technologies Blog | IT Career Guidance, Training Tips & Industry Insights</title>
        <meta 
          name="description" 
          content="Discover expert IT career guidance, software training tips, placement preparation strategies, and technology trends. Your trusted resource for IT skill development and job-ready learning." 
        />
        <meta 
          name="keywords" 
          content="IT training institute, software training courses, IT career guidance, placement assistance, hands-on learning, real-time IT projects, career-focused training, job-oriented IT courses" 
        />
        <meta property="og:title" content="IAT Technologies Blog | Expert IT Career Insights" />
        <meta property="og:description" content="Transform your IT career with expert insights, training tips, and placement strategies from Chennai's leading IT training institute." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://iattechnologies.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <BlogHeader />
        <main>
          <BlogHero />
          <FeaturedBlogs />
          <BlogCategories />
          <LatestPosts />
          <WhyFollowBlog />
          <BlogCTA />
        </main>
        <BlogFooter />
      </div>
    </>
  );
};

export default Index;