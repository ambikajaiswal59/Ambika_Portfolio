import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

// Define your professional experience data with enhanced descriptions and highlighting
const experiences = [
  {
    role: "Software Engineer",
    company: "ML. Infomap",
    duration: "April 2023 - Present",
    description: [
      <>Built <span className="text-pink-400 font-semibold">Reactive Web Applications</span> using <span className="text-pink-400 font-semibold">React.js</span>, <span className="text-pink-400 font-semibold">Tailwind CSS</span>, and <span className="text-pink-400 font-semibold">Material UI</span>.</>,
      <>Developed <span className="text-pink-400 font-semibold">GIS-based dashboards</span> and map visualizations with <span className="text-pink-400 font-semibold">ArcGIS</span> for spatial data analysis.</>,
      <>Rebuilt the corporate website, improving performance and user engagement by <span className="text-pink-400 font-semibold">15%</span>.</>,
      <>Optimized data management by integrating <span className="text-pink-400 font-semibold">REST APIs</span> and fine-tuning <span className="text-pink-400 font-semibold">MongoDB</span> and <span className="text-pink-400 font-semibold">SQL</span> queries.</>,
      <>Contributed to <span className="text-pink-400 font-semibold">Agile sprints</span>, participating in planning, daily stand-ups, and code reviews.</>,
      <>Successfully deployed and maintained projects on <span className="text-pink-400 font-semibold">AWS</span>, ensuring scalability and uptime.</>,
    ],
  },
  {
    role: "Project Engineer (Frontend Trainee)",
    company: "Wipro",
    duration: "Mar 2022 - Feb 2023",
    description: [
      <>Completed a comprehensive <span className="text-pink-400 font-semibold">software engineering training</span> program, gaining expertise in <span className="text-pink-400 font-semibold">C++</span> and <span className="text-pink-400 font-semibold">SDLC</span>.</>,
      <>Supported <span className="text-pink-400 font-semibold">frontend development activities</span> on internal projects in a cross-functional team.</>,
      <>Strengthened foundational skills in <span className="text-pink-400 font-semibold">UI implementation</span> and <span className="text-pink-400 font-semibold">version control</span> using <span className="text-pink-400 font-semibold">Git</span>.</>,
    ],
  },
];

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-950 text-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 blur-3xl" style={{ backgroundImage: "radial-gradient(ellipse at bottom, #8B5CF6, #EC4899, transparent)", animation: "pulse-slow 20s ease-in-out infinite" }}></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex-grow h-1 bg-gray-700 rounded-full"></div>
          <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mx-4">Experience</h2>
          <div className="flex-grow h-1 bg-gray-700 rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="relative pl-8 md:pl-16 after:absolute after:top-0 after:left-4 after:md:left-8 after:w-1 after:h-full after:bg-gray-800 after:rounded-full"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0 p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute -left-4 md:-left-8 top-0 h-full flex flex-col items-center">
                {/* Timeline Circle */}
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center border-2 border-gray-950 shadow-xl z-10">
                  <Briefcase size={20} className="text-white" />
                </div>
                {/* Connector Line */}
                <div className="w-1 h-full bg-gray-800 absolute top-0 z-0"></div>
              </div>

              {/* Card Content */}
              <div className="pl-6 md:pl-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-50">{exp.role}</h3>
                  <p className="text-sm text-gray-400 font-light whitespace-nowrap">{exp.duration}</p>
                </div>
                <h4 className="text-md text-purple-400 mb-2">{exp.company}</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}