import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-950 text-gray-200 relative overflow-hidden">
      {/* Background Spline-like Element */}
      <div className="absolute inset-0 z-0 opacity-10 blur-3xl" style={{ backgroundImage: "radial-gradient(ellipse at bottom, #8B5CF6, #EC4899, transparent)", animation: "pulse-slow 20s ease-in-out infinite" }}></div>
      <div className="absolute inset-0 z-0 bg-gray-950 opacity-90"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side: Bold Title & Visual */}
        <motion.div
          className="flex-1 text-left lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ WebkitTextStroke: "1px #FFF", color: "transparent" }}
          >
            I am a builder.
          </motion.h2>
          <motion.p className="text-lg md:text-xl text-gray-400 font-light mb-8">
            My passion is turning complex ideas into elegant, functional digital experiences.
          </motion.p>
          <motion.div
            className="hidden lg:block w-full h-80 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: "url('http://googleusercontent.com/image_collection/image_retrieval/11434761836366259508_2')",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
          ></motion.div>
        </motion.div>

        {/* Right Side: Content & Skill Cards */}
        <motion.div
          className="flex-1 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A Little About My Journey
          </motion.h3>

          <motion.p
            className="text-lg text-gray-400 font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a dedicated Software Engineer with a passion for crafting responsive and scalable web applications. My journey at **ML. Infomap** and **Wipro** has given me a strong foundation in frontend development and a knack for solving complex technical challenges. I thrive on building seamless user experiences and optimizing performance with clean, modern code.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              className="flex items-start p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <Briefcase size={32} className="text-purple-400 mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Software Engineer</h4>
                <p className="text-gray-400 text-sm">ML. Infomap & Wipro</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <Award size={32} className="text-pink-400 mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Key Skills</h4>
                <p className="text-gray-400 text-sm">React, Tailwind, Node.js, SQL Server</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}