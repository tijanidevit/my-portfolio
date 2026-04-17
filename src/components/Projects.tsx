import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Layers, Zap, Database, Server, Terminal, Loader2 } from 'lucide-react';
import ScandiumDemo from './ScandiumDemo';

const projects = [
  {
    title: "Scandium",
    subtitle: "No-Code API Testing Platform",
    description: "A SaaS platform that allows developers to automate API testing and generate documentation without writing code.",
    highlights: [
      "2000+ automated test runs weekly",
      "Queue-driven test execution system",
      "AI-powered web, mobile, and API test tools"
    ],
    stack: ["Node.js", "TypeScript", "Laravel", "PostgreSQL", "Redis"],
    icon: <Zap className="text-accent" size={24} />,
    color: "accent",
    hasDemo: true
  },
  {
    title: "TestPod",
    subtitle: "AI Test Management System",
    description: "Built backend services and queue-driven processing for AI-assisted test case generation.",
    highlights: [
      "AI-assisted test case generation",
      "Increased test coverage by 40%",
      "Queue-driven processing architecture"
    ],
    stack: ["Node.js", "Python", "Redis", "Worker Processes"],
    icon: <Server className="text-accent-secondary" size={24} />,
    color: "accent-secondary"
  },
  {
    title: "AFSS ERP",
    subtitle: "Multi-Tenant ERP System",
    description: "Developed secure multi-tenant backend modules (HR, Finance, Procurement, Admin) using Laravel.",
    highlights: [
      "Secure multi-tenant architecture",
      "Modules for HR, Finance, and Procurement",
      "Scalable backend infrastructure"
    ],
    stack: ["Laravel", "PHP", "PostgreSQL", "Multi-tenancy"],
    icon: <Layers className="text-blue-500" size={24} />,
    color: "blue-500"
  },
  {
    title: "Routely",
    subtitle: "Logistics Platform",
    description: "Engineered tracking APIs and route optimization logic reducing delivery delays by 30%.",
    highlights: [
      "Route optimization logic",
      "Real-time tracking APIs",
      "Reduced delivery delays by 30%"
    ],
    stack: ["Node.js", "REST APIs", "Redis", "PostgreSQL"],
    icon: <Database className="text-purple-500" size={24} />,
    color: "purple-500"
  }
];

export default function Projects() {
  const [loadingBtn, setLoadingBtn] = useState<string | null>(null);

  const handleBtnClick = (btnName: string) => {
    setLoadingBtn(btnName);
    // Simulate a delay for the loading state
    setTimeout(() => {
      setLoadingBtn(null);
    }, 2000);
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              A collection of engineering systems and platforms I've designed and built.
            </p>
          </div>
          <a href="https://github.com/tijanidevit" target="_blank" rel="noopener noreferrer" className="text-accent font-medium flex items-center gap-2 hover:underline">
            View all on GitHub <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(99, 102, 241, 0.15)",
            borderColor: "rgba(99, 102, 241, 0.3)"
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-24 p-6 sm:p-8 md:p-12 glass rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden border border-border transition-colors duration-500"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden lg:block">
            <Terminal size={400} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
                <Zap size={14} />
                Interactive Demo
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Scandium: No-Code API Testing</h3>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                Experience the core engine of Scandium. This interactive mockup demonstrates how the distributed worker system resolves endpoints and executes test suites in real-time.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Real-time distributed execution",
                  "Automated schema validation",
                  "Performance benchmarking"
                ].map((item, i) => (
                  <motion.div 
                    key={item} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Zap size={12} />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleBtnClick('case-study')}
                  disabled={loadingBtn === 'case-study'}
                  className="w-full sm:w-auto px-6 py-3 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 min-w-[160px]"
                >
                  {loadingBtn === 'case-study' ? <Loader2 className="animate-spin" size={18} /> : "Full Case Study"}
                </button>
                <button 
                  onClick={() => handleBtnClick('docs')}
                  disabled={loadingBtn === 'docs'}
                  className="w-full sm:w-auto px-6 py-3 glass rounded-xl font-bold hover:bg-foreground/5 transition-all flex items-center justify-center gap-2 min-w-[160px]"
                >
                  {loadingBtn === 'docs' ? <Loader2 className="animate-spin" size={18} /> : "Documentation"}
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full overflow-hidden"
            >
              <ScandiumDemo />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => !p.hasDemo).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.2)",
                borderColor: "rgba(99, 102, 241, 0.4)"
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                scale: { duration: 0.2 },
                boxShadow: { duration: 0.2 }
              }}
              className="group relative glass p-8 rounded-3xl border border-border transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-3">
                  <button className="p-2 glass rounded-full hover:bg-accent/10 transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="p-2 glass rounded-full hover:bg-accent/10 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <div className="mb-6 p-3 w-fit rounded-2xl bg-foreground/5 group-hover:bg-accent/10 transition-colors">
                {project.icon}
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm font-medium text-accent/80 uppercase tracking-widest mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 text-sm text-foreground/80">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium bg-foreground/5 rounded-full border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
