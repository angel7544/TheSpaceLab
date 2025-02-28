import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import {
  Satellite,
  Map,
  Compass,
  Database,
  LineChart,
  Camera,
} from "lucide-react";

const services = [
  {
    icon: Satellite,
    title: "Remote Sensing",
    description:
      "Satellite imagery analysis and interpretation for environmental monitoring",
    image: "https://images.unsplash.com/photo-1508233620467-f79f1e317a05",
  },
  {
    icon: Map,
    title: "GIS Mapping",
    description:
      "Custom GIS solutions for spatial analysis and visualization",
    image: "https://images.unsplash.com/photo-1599202889720-cd3c0833efa1",
  },
  {
    icon: Compass,
    title: "Land Surveying",
    description:
      "Precise land surveying services using advanced equipment",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Comprehensive geospatial database design and management",
    image: "https://images.unsplash.com/photo-1600010101590-fbc57640c470",
  },
  {
    icon: LineChart,
    title: "Spatial Analysis",
    description:
      "Advanced spatial analysis and modeling services",
    image: "https://images.unsplash.com/photo-1578924825042-31d14cf13c35",
  },
  {
    icon: Camera,
    title: "Aerial Photography",
    description:
      "High-resolution aerial imagery and photogrammetry",
    image: "https://images.unsplash.com/photo-1529034502960-57f42a966080",
  },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
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
      </div>
    </section>
  );
}
