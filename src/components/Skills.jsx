import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaMicrosoft,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { MdWidgets } from "react-icons/md";

const skills = [
  { name: "React.js", icon: <FaReact size={32} color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} color="#68A063" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
  { name: "Material-UI", icon: <MdWidgets size={32} color="#0081CB" /> },
  { name: "UI/UX (Figma)", icon: <FaFigma size={32} color="#A259FF" /> },
  { name: "SQL", icon: <FaDatabase size={32} color="#D19036" /> },
  { name: "MongoDB", icon: <SiMongodb size={32} color="#47A248" /> },
  { name: ".NET", icon: <FaMicrosoft size={32} color="#512BD4" /> },
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gray-950 text-gray-200 overflow-hidden"
    >
      {/* Background with a subtle blue shade */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 animate-gradient-shift"></div>

      {/* Radial gradient glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>

      <motion.h2
        className="relative z-10 text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
            }}
            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-700 bg-gray-900 overflow-hidden transition-all duration-300 transform-gpu cursor-pointer shadow-lg hover:shadow-xl"
          >
            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-400 via-pink-600 to-purple-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 animate-pulse-fast"></div>

            <div className="z-10 text-center flex flex-col items-center">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="font-bold text-lg text-gray-50">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}