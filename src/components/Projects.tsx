import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Calculator',
    description: 'A Cool Modern Calculator',
    image: 'img/My-Calculator.png',
    github: 'https://github.com/PuneetBenipal/Cool-Calculator',
    live: 'https://cool-calculator-by-puneet.netlify.app/', 
    tech: ['HTML', 'CSS', 'TailWind Css', 'JavaScript']
  },
  {
    title: 'Login Page',
    description: 'A Cool Modern Login Page',
    image: 'img/LoginPage.png',
    github: 'https://github.com/PuneetBenipal/Cool-Login-Page',
    live: 'https://cool-login-page-by-puneet.netlify.app/',
    tech: ['HTML', 'CSS', 'TailWind Css', 'JavaScript']
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black relative" id="projects">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-400 neon-text inline-flex items-center gap-3">
            <Zap className="w-8 h-8" />
            My Projects
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-400/30 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-cyan-400/10 text-cyan-400 rounded-md border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;