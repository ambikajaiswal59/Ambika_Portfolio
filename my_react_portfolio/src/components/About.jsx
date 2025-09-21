import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto bg-white rounded-2xl shadow-md">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-purple-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-center max-w-3xl mx-auto text-lg text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        I am a dedicated and detail-oriented Frontend Developer with experience in building modern web applications.
        I enjoy creating visually appealing interfaces and optimizing user experience. My expertise lies in React, TailwindCSS, and
        other web technologies that allow me to turn creative ideas into seamless and responsive designs.
      </motion.p>

      <motion.div
        className="mt-10 grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-600">2+ years in web development, working on diverse projects.</p>
        </div>
        <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Focus</h3>
          <p className="text-gray-600">Creating user-friendly interfaces with clean, scalable code.</p>
        </div>
      </motion.div>
    </section>
  );
}
