import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[128px] -z-10" />

      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Get in Touch</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed">
              Have a complex backend problem or a new SaaS idea? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 sm:gap-6 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:themustaphatijani@gmail.com" className="text-base sm:text-xl font-bold hover:text-accent transition-colors break-all">
                    themustaphatijani@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 sm:gap-6 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+2348148977610" className="text-base sm:text-xl font-bold hover:text-accent transition-colors">
                    +2348148977610
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 pt-4"
              >
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center hover:text-accent hover:border-accent transition-all">
                  <Github size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center hover:text-accent hover:border-accent transition-all">
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem]"
          >
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-medium ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm sm:text-base"
                    placeholder="Mustapha Tijani"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm sm:text-base"
                    placeholder="mustapha@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs sm:text-sm font-medium ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm sm:text-base"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium ml-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl sm:rounded-2xl text-sm font-medium flex items-center justify-center text-center ${status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}
                >
                  {status.message}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 sm:py-4 bg-accent text-white rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base disabled:opacity-70"
              >
                {isSending ? (
                  <>
                    Sending...
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
