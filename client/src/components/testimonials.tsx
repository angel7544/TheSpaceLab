import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "David Brown",
    company: "EcoMap Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    text: "GeoSense's remote sensing solutions helped us monitor environmental changes with unprecedented accuracy.",
  },
  {
    name: "Emily Chen",
    company: "Urban Planning Co.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    text: "Their GIS mapping services were instrumental in our city development project. Highly recommended!",
  },
  {
    name: "James Wilson",
    company: "Infrastructure Dev",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    text: "The quality of their drone surveys and 3D modeling exceeded our expectations.",
  },
  {
    name: "Maria Garcia",
    company: "Environmental Watch",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    text: "Their environmental monitoring solutions have been crucial for our conservation projects.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our clients say about our services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="absolute w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : -100,
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                    <Avatar className="w-20 h-20 mb-6">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-lg mb-6 italic text-center">"{testimonial.text}"</p>
                    <div className="text-center">
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-primary">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-primary" : "bg-primary/30"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
