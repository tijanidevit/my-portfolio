import { motion } from 'motion/react';
import { Code2, Database, Layout, Cloud } from 'lucide-react';

const skills = [
  {
    category: "Backend",
    icon: <Code2 size={24} />,
    items: ["PHP", "Laravel", "Node.js", "TypeScript", "Python", "REST APIs", "Microservices", "Service-Layer Architecture"]
  },
  {
    category: "Frontend",
    icon: <Layout size={24} />,
    items: ["React", "Next.js", "Vue", "JavaScript", "TailwindCSS", "Framer Motion"]
  },
  {
    category: "Databases & Cloud",
    icon: <Database size={24} />,
    items: ["MySQL", "PostgreSQL", "Redis", "AWS (S3, EC2)", "Docker", "CI/CD"]
  },
  {
    category: "Architecture & Testing",
    icon: <Cloud size={24} />,
    items: ["Queue Systems", "Event-Driven Processing", "Distributed Systems", "TDD", "PHPUnit", "Pest"]
  }
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-card/30">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Engineering Stack</h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A comprehensive toolkit focused on building scalable, maintainable, and high-performance software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl hover:border-accent/30 transition-all group"
            >
              <div className="mb-4 sm:mb-6 p-3 w-fit rounded-2xl bg-foreground/5 group-hover:bg-accent/10 text-accent transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium bg-background/50 rounded-lg border border-border/50">
                    {item}
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
