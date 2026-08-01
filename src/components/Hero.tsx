import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Full Stack Developer', 'Backend Engineer', 'Problem Solver', 'UI-focused Builder'];

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 90);
        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(timeout);
    }

    if (displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 45);
      return () => clearTimeout(timeout);
    }

    setIsDeleting(false);
    setCurrentIndex((prev) => (prev + 1) % texts.length);
  }, [displayedText, currentIndex, isDeleting, texts]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], rotate: [8, 0, 8] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-[-8%] h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-primary" />
              Available for internships, full-time opportunities, and freelance work
            </div>

            <motion.h1
              className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Hi, I’m{' '}
              <span className="text-primary">Harshit Agarwal</span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              I am a{' '}
              <span className="font-semibold text-foreground">
                <span className="inline-block min-w-[220px] text-left">
                  {displayedText}
                  <span className="ml-1 animate-pulse">|</span>
                </span>
              </span>{' '}
              with a strong focus on clean architecture, reliable APIs, and polished user experiences.
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="rounded-full bg-primary px-7 py-5 text-base font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary-hover"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border border-primary/30 bg-card/70 px-7 py-5 text-base font-semibold text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="mx-auto text-primary" size={28} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
