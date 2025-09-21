import { motion } from "framer-motion";
import { Code, Layout, Server, Cpu } from "lucide-react";

const skills = [
  { name: "React", icon: <Code size={32} /> },
  { name: "TailwindCSS", icon: <Layout size={32} /> },
  { name: "Node.js", icon: <Server size={32} /> },
  { name: "JavaScript", icon: <Cpu size={32} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-purple-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-center"
          >
            <div className="mx-auto mb-4 text-purple-600">{skill.icon}</div>
            <h3 className="font-semibold text-lg">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
