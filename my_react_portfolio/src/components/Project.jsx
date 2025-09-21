import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive and animated portfolio built with React and TailwindCSS.",
    image: "https://via.placeholder.com/400x250?text=Portfolio",
    link: "#",
  },
  {
    title: "E-commerce Website",
    description: "An online store with product pages, cart functionality, and smooth UI interactions.",
    image: "https://via.placeholder.com/400x250?text=E-commerce",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A CMS-based blog platform with markdown support and user authentication.",
    image: "https://via.placeholder.com/400x250?text=Blog",
    link: "#",
  },
  {
    title: "Task Manager App",
    description: "A productivity tool that helps users manage their tasks efficiently.",
    image: "https://via.placeholder.com/400x250?text=Task+Manager",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-purple-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
