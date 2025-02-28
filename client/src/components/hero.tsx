import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  // Use a background gradient instead of an image for better performance and reliability
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, 
            rgba(0, 0, 0, 0.5) 0%, 
            rgba(0, 0, 0, 0.7) 100%
          )`,
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Remote Sensing & GIS Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transforming geospatial data into actionable insights for a better tomorrow
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Our Services
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-80" />
      </motion.div>
    </section>
  );
}