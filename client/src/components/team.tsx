import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "With over 20 years of experience in geospatial technology",
  },
  {
    name: "Sarah Johnson",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Expert in remote sensing and GIS applications",
  },
  {
    name: "Mike Anderson",
    role: "Lead Surveyor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Specialist in drone surveys and photogrammetry",
  },
];

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* CEO Message */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="max-w-3xl mx-auto mb-16 p-6 bg-accent rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Message from our CEO</h3>
            <p className="text-lg text-muted-foreground italic">
              "At GeoSense, we're committed to delivering cutting-edge geospatial solutions
              that help our clients make informed decisions. Our team of experts combines
              decades of experience with the latest technology to provide unparalleled
              service in remote sensing, GIS, and land surveying."
            </p>
            <p className="mt-4 font-semibold">- John Smith, CEO</p>
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
