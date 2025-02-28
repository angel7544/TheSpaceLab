import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Gallery from "@/components/gallery";
import Blog from "@/components/blog";
import Careers from "@/components/careers";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Team />
        <Services />
        <Testimonials />
        <Projects />
        <Gallery />
        <Blog />
        <Careers />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}