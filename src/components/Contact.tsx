import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
    null
  );

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_iwztxzs",
        "template_2gv5r0p",
        formData,
        "QeTJp6ROEC0u4fuws"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section className="py-20 bg-black relative" id="contact">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="relative">
                <Mail className="w-12 h-12 text-cyan-400" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-cyan-400 rounded-full filter blur-xl opacity-50"
                />
              </div>
            </motion.div>
            <h2 className="text-4xl font-bold text-cyan-400 neon-text">
              Get In Touch
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 backdrop-blur-sm bg-gray-900/50 p-8 rounded-lg border border-cyan-400/30"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-cyan-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-cyan-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-cyan-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 transition-colors duration-300"
                placeholder="Your message"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center px-6 py-3 bg-cyan-400 hover:bg-cyan-300 rounded-lg text-black font-medium transition-colors duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <Send className="mr-2" size={20} />
              Send Message
            </motion.button>

            {status === "loading" && (
              <p className="text-cyan-400 text-center mt-2">Sending...</p>
            )}
            {status === "success" && (
              <p className="text-green-400 text-center mt-2">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center mt-2">
                Failed to send message.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
