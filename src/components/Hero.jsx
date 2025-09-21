import { motion } from "framer-motion";

// This is a mock Button component for demonstration purposes.
const Button = ({ children, variant, ...props }) => {
  const baseClasses = "py-3 px-8 rounded-full text-base font-medium transition-colors duration-200";
  const primaryClasses = "bg-purple-600 text-white hover:bg-purple-700 shadow-lg";
  const outlineClasses = "bg-transparent text-purple-400 border border-purple-400 hover:bg-purple-800/30";

  return (
    <motion.a
      {...props}
      className={`${baseClasses} ${variant === "outline" ? outlineClasses : primaryClasses}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

// Define variants for the staggered character animation
const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const characterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Hero() {
  const headingText = "Hi, I'm";
  const nameText = "Ambika Jaiswal";
  const subtitleText = "A passionate Frontend Developer crafting responsive, modern, and user-friendly experiences.";

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden bg-gray-950">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('http://googleusercontent.com/image_collection/image_retrieval/11434761836366259508_2')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gray-950 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 text-gray-200">
        <motion.div
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4">
            {headingText.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={characterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              className="inline-block text-purple-400 ml-2 cursor-pointer"
              variants={characterVariants}
              whileHover={{ scale: 1.1, color: "#c084fc" }}
            >
              {nameText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={characterVariants}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light text-gray-400"
            variants={letterVariants}
          >
            {subtitleText.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={characterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Button href="#projects">View Projects</Button>
          <Button variant="outline" href="#contact">Hire Me</Button>
          <Button variant="primary" href="https://drive.google.com/uc?export=download&id=15-Tq_kJMO8LkLOYP0Q9qXXLpX78yJZNr" download>Download Resume</Button>
          {/* <Button variant="primary" href="https://drive.google.com/file/d/15-Tq_kJMO8LkLOYP0Q9qXXLpX78yJZNr/view?usp=drive_link" download>Download Resume</Button> */}
        </motion.div>
      </div>
    </section>
  );
}