import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import {
  Plane,
  MapPin,
  Satellite,
  Mountain,
  Network,
  TreePine,
  Database,
  Download,
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Land Surveying",
    description: "Precise land surveying services using advanced GNSS and Total Station equipment",
  },
  {
    icon: Database,
    title: "GIS Mapping",
    description: "Custom GIS solutions using QGIS, ArcGIS, and other advanced mapping tools",
  },
  {
    icon: Satellite,
    title: "Remote Sensing & Analysis",
    description: "Satellite imagery analysis using Sentinel, Landsat, and advanced processing techniques",
  },
  {
    icon: Plane,
    title: "Drone Surveys",
    description: "UAV-based surveys for high-resolution mapping and 3D modeling",
  },
  {
    icon: Mountain,
    title: "Topographic & Contour Mapping",
    description: "Detailed terrain mapping and elevation analysis",
  },
  {
    icon: Network,
    title: "Utility Mapping",
    description: "Comprehensive mapping of pipelines, powerlines, and infrastructure",
  },
  {
    icon: TreePine,
    title: "Environmental Monitoring",
    description: "Environmental impact assessment and monitoring using geospatial data",
  },
  {
    icon: Database,
    title: "Custom GIS Solutions",
    description: "Tailored GIS applications and database solutions",
  },
];

const technologies = [
  "QGIS",
  "ArcGIS",
  "Erdas Imagine",
  "Google Earth",
  "Sentinel",
  "Landsat",
  "LIDAR",
  "UAV/Drones",
  "GNSS",
  "Total Station",
  "Bhuvan",
  "OpenStreetMap",
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive geospatial solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card rounded-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => {
              // In a real implementation, this would download a PDF
              alert("Download feature will be implemented");
            }}
          >
            <Download className="mr-2 h-4 w-4" /> Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
}