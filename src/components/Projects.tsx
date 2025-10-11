import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce application with user authentication, product management, shopping cart, and secure payment integration. Built with modern best practices and responsive design.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com/demo/ecommerce-platform',
      demo: 'https://demo-ecommerce.vercel.app',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, team workspaces, and deadline tracking. Perfect for agile teams and personal productivity.',
      techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/demo/task-manager',
      demo: 'https://demo-taskmanager.vercel.app',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Some of my recent work showcasing my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useSpring(y, { stiffness: 300, damping: 30 });
            const rotateY = useSpring(x, { stiffness: 300, damping: 30 });
            
            const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              const distanceX = event.clientX - centerX;
              const distanceY = event.clientY - centerY;
              
              x.set(distanceX * 0.1);
              y.set(distanceY * 0.1);
            };
            
            const handleMouseLeave = () => {
              x.set(0);
              y.set(0);
              setHoveredCard(null);
            };
            
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => setHoveredCard(index)}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border group cursor-pointer"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
              >
              <div className="p-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-4"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </motion.div>
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: 'hsl(var(--primary))',
                          color: 'hsl(var(--primary-foreground))',
                          transition: { duration: 0.2 }
                        }}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-pointer transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium group-hover:shadow-lg transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                        GitHub
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium group-hover:shadow-lg transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
