import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-bold tracking-tight">
              Mustapha <span className="text-accent">Tijani</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Fullstack Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:themustaphatijani@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} Mustapha Tijani. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
