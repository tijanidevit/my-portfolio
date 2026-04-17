import { motion } from 'motion/react';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[128px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container px-6 mx-auto text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border rounded-full border-accent/30 bg-accent/5 text-accent">
            Available for new opportunities
          </span>
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Mustapha <span className="text-accent">Tijani</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Fullstack Software Engineer
          <span className="block mt-2 text-base md:text-lg font-normal opacity-80">
            I design and build scalable backend systems, APIs, and developer platforms used to automate complex workflows.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto group px-8 py-4 bg-accent text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all hover:scale-105 active:scale-95"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 glass rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95"
          >
            <Mail size={18} />
            Contact Me
          </a>
          <a
            href="/Mustapha_Tijani_Fullstack_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-border rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95"
          >
            <Download size={18} />
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
