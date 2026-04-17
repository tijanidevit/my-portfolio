import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent-foreground">
        <Navbar />
        
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              
              <section id="about" className="py-16 sm:py-24 bg-card/10 border-y border-border">
                <div className="container px-6 mx-auto">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-3xl mx-auto text-center"
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 italic font-serif">"Engineering at the intersection of scale and simplicity."</h2>
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                      Fullstack Software Engineer with 5+ years of experience building scalable web apps end-to-end. I work across Laravel/Node.js backends and React/Next.js frontends, focusing on low-latency APIs, clean architecture, and performance in SaaS and fintech systems.
                    </p>
                  </motion.div>
                </div>
              </section>

              <Projects />
              <Architecture />
              <Experience />

              <Stack />
              <Contact />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
