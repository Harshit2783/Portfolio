import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            GitHub Profile
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Check out my open-source contributions and personal projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Github className="text-white" size={64} />
                </div>
              </motion.div>

              <div className="flex-grow text-center md:text-left">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  @Harshit2783
                </h3>
                <p className="text-muted-foreground mb-4 text-lg">
                  Building innovative solutions one commit at a time
                </p>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
                  asChild
                >
                  <a
                    href="https://github.com/Harshit2783"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View My GitHub
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <h4 className="text-xl font-bold text-foreground mb-3">
                📌 Pinned Repository
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Github className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h5 className="font-semibold text-foreground">Larn2Pay</h5>
                    <p className="text-sm text-muted-foreground">
                      EMI School Fees Collection Web App
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <h4 className="text-xl font-bold text-foreground mb-3">
                📊 Contribution Graph
              </h4>
              <div className="flex flex-wrap gap-1">
                {Array.from({ length: 52 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: i * 0.01 }}
                    className={`w-3 h-3 rounded-sm ${
                      Math.random() > 0.3
                        ? Math.random() > 0.5
                          ? 'bg-primary/80'
                          : 'bg-primary/40'
                        : 'bg-primary/10'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
