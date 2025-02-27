import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Calculator',
    description: 'A Cool Modern Calculator',
    github: 'https://github.com/PuneetBenipal/Cool-Calculator',
    live: 'https://cool-calculator-by-puneet.netlify.app/', 
    tech: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript']
  },
  {
    title: 'Login Page',
    description: 'A Cool Modern Login Page',
    github: 'https://github.com/PuneetBenipal/Cool-Login-Page',
    live: 'https://cool-login-page-by-puneet.netlify.app/',
    tech: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript']
  },
  {
    title: 'TODO List App',
    description: 'A Cool Modern TODO List App',
    github: 'https://github.com/PuneetBenipal/Todo-List',
    live: 'https://puneet-todo-list-app.netlify.app/',
    tech: ['HTML', 'CSS','JavaScript']
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-[#0a0a0a] relative" id="projects">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-400 inline-flex items-center gap-3">
            <Zap className="w-8 h-8 text-cyan-400" />
            My Projects
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#121212] shadow-lg shadow-cyan-400/20 rounded-xl overflow-hidden border border-cyan-400/20 group"
            >
              <div className="relative overflow-hidden p-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-cyan-400/10 text-cyan-400 rounded-md border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
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
