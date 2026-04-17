import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Github, Linkedin, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Systems', href: '#systems' },
    { name: 'Experience', href: '#experience' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2 md:py-6" : "py-4 md:py-8"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between md:justify-center relative">
          {/* Mobile Logo - Left aligned */}
          <a href="#" className="md:hidden text-xl font-bold tracking-tight z-50">
            Mustapha <span className="text-accent">Tijani</span>
          </a>

          {/* Desktop Nav - Centered Pill */}
          <div className="hidden md:flex items-center gap-2 glass px-8 py-3 rounded-full shadow-2xl border border-white/10">
            <div className="flex items-center gap-8 mr-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="w-px h-4 bg-border mx-2" />

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent/10 text-foreground/70 hover:text-accent transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="https://github.com/tijanidevit" target="_blank" rel="noreferrer" className="p-2 text-foreground/70 hover:text-accent transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/dev-mustapha-tijani/" target="_blank" rel="noreferrer" className="p-2 text-foreground/70 hover:text-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle - Right aligned */}
          <div className="flex items-center gap-2 md:hidden z-50">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass text-foreground/70 shadow-lg"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full glass text-foreground/70 shadow-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-4 left-4 right-4 z-40"
          >
            <div className="bg-background/80 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-white/20 p-8 pt-20">
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-foreground/80 hover:text-accent transition-colors py-2"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="h-px bg-border/50 my-2" />
                <div className="flex gap-4">
                  <a href="https://github.com/tijanidevit" target="_blank" rel="noreferrer" className="flex-1 py-4 glass rounded-2xl flex items-center justify-center gap-3 text-sm font-bold shadow-md">
                    <Github size={20} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/dev-mustapha-tijani/" target="_blank" rel="noreferrer" className="flex-1 py-4 glass rounded-2xl flex items-center justify-center gap-3 text-sm font-bold shadow-md">
                    <Linkedin size={20} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
