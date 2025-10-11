import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 z-40"
      style={{ 
        background: 'rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary origin-left"
        style={{ 
          scaleX,
          width: '100%'
        }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
