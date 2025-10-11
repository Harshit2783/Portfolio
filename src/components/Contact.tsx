import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'harshit.23171@gmail.com';
    const mailtoLink = `mailto:${email}`;
    
    // Use window.open for better cross-platform compatibility
    window.open(mailtoLink, '_self');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshit.23171@gmail.com',
      href: 'mailto:harshit.23171@gmail.com?subject=Portfolio Inquiry&body=Hello Harshit,%0D%0A%0D%0AI came across your portfolio and would like to discuss opportunities.%0D%0A%0D%0ABest regards,',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/harshit-agarwal',
      href: 'https://www.linkedin.com/in/harshit-agarwal-063851298/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@harshitagarwal',
      href: 'https://github.com/Harshit2783',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available for Remote',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            I'm currently looking for campus placement opportunities. Let's connect and discuss how I can contribute to your team!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-card to-secondary/20 rounded-2xl p-8 md:p-12 shadow-card border border-border"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 0.9 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-xl flex-shrink-0"
                      animate={isInView ? { 
                        y: [0, -5, 0],
                        rotate: [0, 2, 0]
                      } : {}}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon className="text-primary" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.label}
                      </h3>
                      {info.href ? (
                        info.label === 'Email' ? (
                          <button
                            onClick={handleEmailClick}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer text-left bg-transparent border-none p-0"
                          >
                            {info.value}
                          </button>
                        ) : (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        )
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center pt-8 border-t border-border"
            >
              <p className="text-lg text-muted-foreground mb-6">
                Ready to discuss opportunities? Drop me an email!
              </p>
              <Button
                size="lg"
                onClick={handleEmailClick}
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground">
              Open to internships, full-time positions, and freelance projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
