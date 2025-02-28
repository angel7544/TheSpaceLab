import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Latest Trends in Remote Sensing Technology",
    excerpt: "Exploring how AI and machine learning are revolutionizing satellite image analysis",
    date: "February 25, 2025",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    category: "Technology",
  },
  {
    title: "Case Study: Urban Development Mapping",
    excerpt: "How we helped city planners track urban growth using temporal satellite imagery",
    date: "February 20, 2025",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    category: "Case Study",
  },
  {
    title: "Drone Technology in Modern Surveying",
    excerpt: "The impact of UAV technology on land surveying accuracy and efficiency",
    date: "February 15, 2025",
    image: "https://images.unsplash.com/photo-1508614589180-0544c4ea886a",
    category: "Innovation",
  },
];

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog & Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends and innovations in geospatial technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-primary font-medium">
                      {post.category}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
