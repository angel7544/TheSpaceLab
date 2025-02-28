import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const images = [
  {
    url: "https://images.unsplash.com/photo-1506519056028-d18449e82c6f",
    title: "Aerial Survey",
  },
  {
    url: "https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd",
    title: "Survey Equipment",
  },
  {
    url: "https://images.unsplash.com/photo-1479232284091-c8829ec114ad",
    title: "GIS Mapping",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Team Collaboration",
  },
  {
    url: "https://images.unsplash.com/photo-1639549627672-fad13c93400c",
    title: "Field Work",
  },
  {
    url: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b",
    title: "Data Analysis",
  },
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our projects and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="aspect-video rounded-lg overflow-hidden cursor-pointer relative group"
                    style={{
                      backgroundImage: `url(${image.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-lg font-medium">{image.title}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
