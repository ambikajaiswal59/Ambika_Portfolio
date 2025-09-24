import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa"; // Using this icon for the Tech Stack label
import HomeFirstPage from '../assets/ProjectImage/weather_Home.png';
import VTSHomePage from '../assets/ProjectImage/VTS_Home.png';
import SkillIndia from '../assets/ProjectImage/skillIndiaFirst.png'

// Updated project data from your resume
const projects = [
  {
    title: "Vehicle Tracking System (VTS) - Multi-State Platform",
    description: "Led ongoing enhancements for a vehicle tracking platform used across four states. Implemented backend changes, optimized procedures, and updated code to improve system efficiency and reliability.",
    techStack: ".NET, SQL Server, ArcGIS API, Bootstrap",
    image: VTSHomePage,
    link: "#",
  },
  {
    title: "Weather Risk Categorization Dashboard",
    description: "Built an interactive Angular dashboard to display real-time weather risk levels across telecom towers. Integrated REST APIs to fetch live weather data and dynamically update risk indicators based on geographic coordinates.",
    techStack: "Angular, REST APIs, Weather API",
    image: HomeFirstPage,
    link: "#",
  },
  {
    title: "MSSDS (Maharashtra State Skill Development Society)",
    description: "Redesigned CRUD interfaces in React and Tailwind to enhance user experience on a skill development platform. Replaced legacy JGrid components with modern, responsive UI elements for better usability.",
    techStack: "React.js, Tailwind CSS, Material UI, SQL Server, AWS",
    image: "https://via.placeholder.com/600x400?text=MSSDS+Dashboard",
    link: "#",
  },
  {
    title: "NSDC - Skill India (GIS Dashboard)",
    description: "Built a GIS-driven dashboard to visualize workforce skills and availability across regions. Contributed to frontend development using Figma-based UI designs and integrated interactive maps and charts to support policy planning.",
    techStack: "React.js, Figma",
    image: SkillIndia,
    link: "#",
  },
];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-950 text-gray-200 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 relative z-10 mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            className="block group relative bg-gray-900 rounded-3xl overflow-hidden transition-all duration-300 transform-gpu cursor-pointer"
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Card inner background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>

            <div className="relative z-10 p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-2xl border border-gray-700 transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaLaptopCode className="mr-2 text-purple-400" />
                  <span>{project.techStack}</span>
                </div>
                <div className="flex items-center text-purple-400 font-medium group-hover:text-pink-400 transition-colors duration-300">
                  <span className="mr-2">View Project</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}