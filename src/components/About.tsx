import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Server, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const highlights = ['Problem Solver', 'Team Player', 'Fast Learner'];
  const strengths = [
    'Full-stack development with a focus on clean, maintainable code',
    'REST APIs, authentication, and database-backed applications',
    'Strong understanding of modern web development workflows',
  ];

  return (
    <section id="about" className="bg-background py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">About Me</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl border border-border/80 bg-card/80 p-8 shadow-soft backdrop-blur-sm md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Hello! I’m <span className="font-semibold text-foreground">Harshit Agarwal</span>, a Full Stack Developer currently pursuing my degree in Information Technology. I enjoy building practical, user-friendly web applications that combine strong functionality with thoughtful design.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  My journey into software development began with curiosity about how websites work, and it quickly grew into a passion for both frontend and backend development. I enjoy working with modern tools, learning continuously, and creating solutions that are both efficient and easy to maintain.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {highlights.map((trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-foreground"
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  <Sparkles size={16} />
                  Focus Areas
                </div>

                <div className="space-y-3">
                  {[
                    { icon: Code2, label: 'Frontend & UI', description: 'React, Tailwind, polished interfaces' },
                    { icon: Server, label: 'Backend APIs', description: 'Node.js, Express.js, secure routes' },
                    { icon: Database, label: 'Databases', description: 'MongoDB, MySQL, schema design' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 12 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                        transition={{ delay: 0.35 + index * 0.1 }}
                        className="rounded-xl border border-white/40 bg-card/70 p-3"
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={16} className="text-primary" />
                          <h3 className="font-semibold text-foreground">{item.label}</h3>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
