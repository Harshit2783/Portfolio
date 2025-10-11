import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
              style={{ y }}
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <img
                    src={profilePhoto}
                    alt="Harshit Agarwal"
                    className="rounded-2xl shadow-card w-80 h-80 object-cover border-4 border-card"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl -z-10 transform translate-x-4 translate-y-4"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm <span className="font-semibold text-foreground">Harshit Agarwal</span>, 
                a Full Stack Developer currently pursuing my degree in Information Technology. 
                I'm passionate about creating elegant solutions to complex problems and 
                building applications that make a difference.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in software development began with curiosity about how websites work, 
                and has evolved into a deep love for both frontend and backend development. 
                I enjoy working with modern technologies and frameworks, always eager to learn 
                and implement the latest industry best practices.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or reading tech blogs. I'm currently seeking opportunities 
                for campus placements where I can contribute my skills and continue growing as a developer.
              </p>

              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {['Problem Solver', 'Team Player', 'Fast Learner'].map((trait, index) => (
                  <motion.div
                    key={trait}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.9 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-primary rounded-full"
                      animate={isInView ? { 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      } : {}}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <span className="text-foreground font-medium">{trait}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
