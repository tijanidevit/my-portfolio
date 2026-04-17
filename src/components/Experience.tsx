import { motion } from 'motion/react';

const experiences = [
  {
    company: "Scandium Systems Inc.",
    role: "Fullstack Engineer",
    period: "Dec 2023 - Present",
    description: "Designed a robust scheduling system, architected the TestPod backend, and developed AI-driven tools reducing QA technical troubleshooting by 40%.",
    achievements: [
      "Designed a robust scheduling system allowing users worldwide to automate API tests across multiple timezones with hourly, daily, and weekly frequencies",
      "Architected the entire backend for an AI-powered test management tool (TestPod), building deep integrations with Jira, Trello, Linear, ClickUp, and Monday.com",
      "Engineered a \"Traceability Matrix\" and advanced reporting modules within TestPod for non-technical stakeholders",
      "Developed an AI engine using OpenAI and Gemini to analyze logs and console outputs, reducing technical troubleshooting and debugging time by 40%",
      "Partnered with product and frontend teams to deliver robust backend services using event-driven and test-driven development, slashing feature rollout time by 30% and halving production bugs"
    ]
  },
  {
    company: "Routely Systems Ltd",
    role: "Fullstack Software Engineer",
    period: "Nov 2024 - Present",
    description: "Designed Internal Tooling architectures, built operational automations, and architected mobile application deployments.",
    achievements: [
      "Designed and engineered a comprehensive custom Admin & Analytics system from scratch to manage complex logistics workflows",
      "Built webhook-based architectures and real-time socket systems for live tracking and delivery time prediction",
      "Led technical decision-making and provided high-level technical support for production issues, ensuring 99.9% system reliability",
      "Architected and deployed the Routely mobile application alongside the backend, ensuring a seamless cross-platform experience",
      "Engineered an AI-based failure analysis system to process logs and console outputs, reducing technical troubleshooting cycles"
    ]
  },
  {
    company: "CiCOServe Payments Limited",
    role: "Back-end Developer",
    period: "Jul 2022 - Oct 2023",
    description: "Designed and implemented Laravel-based microservices and integrated secure cloud storage.",
    achievements: [
      "Designed and implemented Laravel-based microservices using Git workflows and product engineering best practices, improving system scalability and reducing downtime by 20%",
      "Integrated AWS S3 secure file storage, reducing upload latency by 30% for financial transaction documentation",
      "Contributed to high-reliability financial transaction services by writing unit tests with PHPUnit, debugging critical payment flows, and deploying on AWS, helping maintain 99.9% system uptime",
      "Strengthened API validation and security by implementing Laravel request validation rules and JWT authentication"
    ]
  },
  {
    company: "SellOff",
    role: "Fullstack PHP Developer",
    period: "Apr 2022 - Jul 2022",
    description: "Developed and maintained core PHP modules and integrated third-party RESTful APIs.",
    achievements: [
      "Developed and maintained core PHP modules using PHPUnit and Git-based CI/CD pipelines, resulting in a 25% reduction in runtime errors",
      "Assisted in integrating third-party RESTful APIs (e.g., Stripe, Twilio) within an Agile/Scrum sprint",
      "Partnered with frontend developers to resolve UI/UX issues and integrate backend logic, resulting in a 15% reduction in data display support tickets"
    ]
  },
  {
    company: "Friconn",
    role: "Backend Developer",
    period: "Sep 2020 - Nov 2021",
    description: "Developed backend APIs for web applications serving 5,000+ active users.",
    achievements: [
      "Developed backend APIs for web applications serving 5,000+ active users",
      "Reduced production defects by 30% by implementing structured debugging processes and TDD practices",
      "Optimized API performance by implementing query indexing in MySQL and caching with Redis, cutting latency by 25%",
      "Maintained platform reliability by implementing New Relic monitoring and resolving 100% of incidents within SLA, achieving 99.9% system uptime"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <span className="text-accent font-mono text-xs sm:text-sm font-bold tracking-wider">{exp.period}</span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-2">{exp.role}</h3>
                    <p className="text-base sm:text-lg font-medium text-muted-foreground">{exp.company}</p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                  <div className="md:w-1/2 md:pl-12">
                    <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/80">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
