import { motion } from 'motion/react';
import { Server, Database, Globe, ArrowRight, Cpu, Share2 } from 'lucide-react';

export default function Architecture() {
  const steps = [
    { icon: <Globe size={20} />, label: "Client", desc: "Web/Mobile Apps" },
    { icon: <Share2 size={20} />, label: "API Gateway", desc: "Nginx / Load Balancer" },
    { icon: <Cpu size={20} />, label: "App Services", desc: "Node.js / Laravel" },
    { icon: <Server size={20} />, label: "Queue System", desc: "Redis / BullMQ" },
    { icon: <Database size={20} />, label: "PostgreSQL", desc: "Primary Data Store" },
  ];

  return (
    <section id="systems" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Systems I Built</h2>
          <p className="text-muted-foreground text-lg">
            Engineering robust architectures designed for high concurrency, reliability, and automated workflows.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group flex flex-col items-center text-center w-full md:w-48"
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-4 group-hover:border-accent group-hover:text-accent transition-all duration-500 shadow-xl shrink-0">
                {step.icon}
              </div>
              <h3 className="font-bold text-lg mb-1">{step.label}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{step.desc}</p>
              
              {index < steps.length - 1 && (
                <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-accent/50">
                  <ArrowRight className="rotate-90" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "API Test Execution Engine",
            "Queue-Based Worker System",
            "Automated Documentation Generator",
            "REST API Infrastructure",
            "High Concurrency Backend Services",
            "Distributed Job Processing"
          ].map((system, i) => (
            <motion.div
              key={system}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-6 border border-border rounded-2xl bg-background/50 hover:bg-accent/5 transition-colors"
            >
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                {system}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Distributed system architecture optimized for performance and horizontal scalability.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
