import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const skills = [
  { 
    name: 'Full Stack Development',
    icon: Layout,
    level: 95,
    color: 'from-cyan-400 to-blue-500'
  },
  { 
    name: 'Game Development',
    icon: Smartphone,
    level: 92,
    color: 'from-purple-400 to-pink-500'
  },
  { 
    name: 'Python',
    icon: Database,
    level: 89,
    color: 'from-purple-400 to-pink-500'
  },
  { 
    name: 'Java',
    icon: Code2,
    level: 80,
    color: 'from-purple-400 to-pink-500'
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black relative" id="skills">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400 text-center mb-16 neon-text"
        >
          Tech Matrix
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{ 
                    boxShadow: ['0 0 10px rgba(0,255,255,0.2)', '0 0 20px rgba(0,255,255,0.4)', '0 0 10px rgba(0,255,255,0.2)']
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="p-2 rounded-lg bg-gray-800"
                >
                  <skill.icon className="text-cyan-400" size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white ml-3">{skill.name}</h3>
              </div>
              
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;