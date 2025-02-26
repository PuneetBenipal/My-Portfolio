import { motion } from 'framer-motion';
import { Terminal, Code} from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 
            className="glitch text-6xl md:text-8xl font-bold mb-6 text-white"
            data-text="Puneet Benipal"
          >
            Puneet Benipal
          </h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-cyan-400 mb-12 neon-text"
          >
            &lt;Full Stack Web Developer/&gt;
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-8"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-colors"
            >
              <Code size={20} />
              <span>View Projects</span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors"
            >
              <Terminal size={20} />
              <span>Contact Me</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;