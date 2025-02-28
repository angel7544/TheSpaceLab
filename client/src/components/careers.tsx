import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";

const positions = [
  {
    title: "GIS Analyst",
    type: "Full-time",
    location: "Remote",
    experience: "2-5 years",
    description: "Looking for an experienced GIS analyst with strong skills in spatial analysis and cartography.",
    requirements: ["QGIS/ArcGIS proficiency", "Python scripting", "Spatial analysis"],
  },
  {
    title: "Remote Sensing Intern",
    type: "Internship",
    location: "Hybrid",
    experience: "0-1 year",
    description: "Exciting internship opportunity for students interested in remote sensing and satellite imagery analysis.",
    requirements: ["Basic GIS knowledge", "Programming skills", "Remote sensing concepts"],
  },
  {
    title: "Land Surveyor",
    type: "Full-time",
    location: "On-site",
    experience: "3+ years",
    description: "Seeking an experienced land surveyor with expertise in modern surveying equipment and techniques.",
    requirements: ["Survey equipment operation", "AutoCAD", "Field experience"],
  },
];

export default function Careers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="careers" className="py-20 bg-background">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577017040065-650ee4d43339')] bg-cover bg-center opacity-5"
      />
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of the future of geospatial technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="outline">{position.type}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                      </div>
                      <p className="text-sm text-primary">
                        Experience: {position.experience}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="space-y-2 mb-6">
                    {position.requirements.map((req) => (
                      <div key={req} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full">
                    Apply Now <Send className="ml-2 h-4 w-4" />
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
