import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Database,
  Globe,
  Server,
  Terminal,
  Package,
  GitBranch,
  Smartphone,
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C', level: 75 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 }
      ],
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 88 },
        { name: 'Framer Motion', level: 75 }
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Authentication', level: 70 }
      ],
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Database Design', level: 65 },
        { name: 'Queries', level: 80 }
      ],
    },
    {
      title: 'Tools',
      icon: Terminal,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'npm', level: 85 },
        { name: 'Vercel', level: 75 }
      ],
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'Progressive Web Apps', level: 70 },
        { name: 'Mobile-First Design', level: 85 }
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="space-y-1"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                        >
                          <motion.div
                            animate={{ 
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-white/20 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-lg">
            Always learning and exploring new technologies to stay current in the ever-evolving tech landscape
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
