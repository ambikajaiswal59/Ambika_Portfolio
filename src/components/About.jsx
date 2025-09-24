import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { FaReact, FaNodeJs, FaFigma, FaDatabase, FaGlobeAmericas , FaMicrosoft} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiPostman, SiGithub, SiCanva, SiExpress } from "react-icons/si";

// Define all skills for a single, comprehensive grid
const allSkills = [
  { name: "React.js", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { name: "UI/UX", icon: <FaFigma size={40} color="#A259FF" /> },
  { name: "SQL", icon: <FaDatabase size={40} color="#D19036" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "GIS", icon: <FaGlobeAmericas size={40} color="#34C759" /> },
  { name: "Postman", icon: <SiPostman size={40} color="#FF6C37" /> },
  { name: "GitHub", icon: <SiGithub size={40} color="#c8e1ff" /> },
  { name: "Canva", icon: <SiCanva size={40} color="#00C4CC" /> },
  { name: "DotNet", icon: <FaMicrosoft size={40} color="#512BD4" /> },
  { name: "Express", icon: <SiExpress size={40} color="#c6c6c6" /> },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-950 text-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 blur-3xl" style={{ backgroundImage: "radial-gradient(ellipse at bottom, #8B5CF6, #EC4899, transparent)", animation: "pulse-slow 20s ease-in-out infinite" }}></div>
      <div className="absolute inset-0 z-0 bg-gray-950 opacity-90"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left Side: Personal Info */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center mb-8">
           <h2 className="relative z-10 text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">ABOUT</h2>
            <div className="flex-grow h-1 bg-gray-700 rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-8 leading-relaxed">
            Hello! My full name is **Ambika Jaiswal**. I am a dedicated Software Engineer with a passion for crafting responsive and scalable web applications. My journey at **ML. Infomap** and **Wipro** has given me a strong foundation in frontend development and a knack for solving complex technical challenges. I thrive on building seamless user experiences and optimizing performance with clean, modern code.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <GraduationCap size={24} className="text-purple-400 mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-50">Education</h4>
                <p className="text-gray-400 text-sm">
                  Bachelor of Technology in Computer Science Engineering from **Banasthali Vidaypith**.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Briefcase size={24} className="text-pink-400 mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-50">Experience</h4>
                <p className="text-gray-400 text-sm">
                  Software Engineer at **ML. Infomap** and **Wipro**.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Award size={24} className="text-teal-400 mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-50">Achievements</h4>
                <p className="text-gray-400 text-sm">
                  Won competitions in design, theatre, and speaking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Skills Grid */}
        <motion.div
          className="flex-1 lg:pl-16 w-full mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center mb-8">
           <h3 className="text-3xl font-bold mr-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tools & Technologies</h3>
            <div className="flex-grow h-1 bg-gray-700 rounded-full"></div>
          </div>
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {allSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 transform-gpu cursor-pointer bg-gray-900 border border-gray-800"
              >
                <div className="mb-2">{skill.icon}</div>
                <h3 className="font-semibold text-sm text-gray-50 text-center">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}