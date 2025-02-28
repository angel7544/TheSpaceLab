import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Urban Development Analysis",
    description: "Comprehensive GIS mapping for city planning and development",
    image: "https://images.unsplash.com/photo-1496241028573-69327bf8f9d5",
    tags: ["GIS", "Urban Planning", "Analysis"],
  },
  {
    title: "Environmental Monitoring",
    description: "Satellite-based monitoring of forest coverage and changes",
    image: "https://images.unsplash.com/photo-1508456939591-ff69e38c6dcb",
    tags: ["Remote Sensing", "Environmental", "Monitoring"],
  },
  {
    title: "Infrastructure Mapping",
    description: "Detailed surveying and mapping of transportation networks",
    image: "https://images.unsplash.com/photo-1597120081843-631bddc57076",
    tags: ["Surveying", "Infrastructure", "Mapping"],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent work and success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full">
                <div
                  className="h-56 bg-cover bg-center transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
