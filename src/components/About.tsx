import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Globe, Laptop } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const floatingIcons = [
    { Icon: Code, delay: 0 },
    { Icon: Layout, delay: 0.2 },
    { Icon: Globe, delay: 0.4 },
    { Icon: Laptop, delay: 0.6 }
  ];

  return (
    <section className="py-20 bg-black relative" id="about">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Floating Icons */}
            <div className="absolute -top-12 left-0 right-0 flex justify-around">
              {floatingIcons.map(({ Icon, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: delay
                  }}
                  className="text-cyan-400/30"
                >
                  <Icon size={32} />
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-8 relative overflow-hidden">
              {/* Animated Background Lines */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(0, 255, 255, 0.1) 50%, transparent 55%)',
                  backgroundSize: '300% 300%',
                  animation: 'gradient 5s linear infinite'
                }}
              />

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold text-cyan-400 mb-6 neon-text"
                >
                  About Me
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="prose prose-invert max-w-none"
                >
                  <p className="text-gray-300 mb-4">
                    Hi there! I'm Puneet Benipal a passionate Full Stack Web Developer with over 7 years of experience in crafting modern, responsive web applications. I specialize in creating seamless user experiences using cutting-edge technologies and best practices in web development.
                  </p>

                  <p className="text-gray-300 mb-4">
                    My approach combines clean, efficient code with innovative design solutions. I'm dedicated to building fast, scalable, and maintainable applications that make a real impact. Whether it's front-end development, back-end architecture, or full-stack solutions, I bring creativity and technical expertise to every project.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-black/50 p-4 rounded-lg border border-cyan-400/20"
                    >
                      <h3 className="text-cyan-400 font-semibold mb-2">Technical Expertise</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>React & Modern JavaScript</li>
                        <li>HTML, CSS, Tailwind Css</li>
                        <li>TypeScript & Next.js</li>
                        <li>RESTful APIs & GraphQL</li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="bg-black/50 p-4 rounded-lg border border-cyan-400/20"
                    >
                      <h3 className="text-cyan-400 font-semibold mb-2">Professional Overview</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>5+ Years Development Experience</li>
                        <li>Agile Development Expert</li>
                        <li>Performance Optimization Specialist</li>  
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;