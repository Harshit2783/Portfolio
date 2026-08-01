import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'harshit.23171@gmail.com';
    const mailtoLink = `mailto:${email}`;
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
      value: 'Available for remote work',
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-background py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Get In Touch</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            I’m open to internships, full-time roles, and collaborative projects. Let’s connect.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-border/80 bg-gradient-to-br from-card to-secondary/20 p-8 shadow-card md:p-10"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Let’s connect</p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                    Interested in working together?
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I’m always happy to discuss new opportunities, portfolio feedback, or ideas for building meaningful web products.
                </p>

                <Button
                  size="lg"
                  onClick={handleEmailClick}
                  className="rounded-full bg-primary px-7 py-5 text-base font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary-hover"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </div>

              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                      transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                      className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/70 p-4"
                    >
                      <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        {info.href ? (
                          info.label === 'Email' ? (
                            <button
                              onClick={handleEmailClick}
                              className="mt-1 bg-transparent p-0 text-left text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                            >
                              {info.value}
                            </button>
                          ) : (
                            <a
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1 block text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                            >
                              {info.value}
                            </a>
                          )
                        ) : (
                          <p className="mt-1 text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
