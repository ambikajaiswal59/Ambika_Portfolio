import { motion } from "framer-motion";

// This is a mock Button component for demonstration purposes.
const Button = ({ children, variant, ...props }) => {
  const baseClasses = "py-3 px-8 rounded-full text-base font-medium transition-all duration-300 transform";
  const primaryClasses = "bg-gradient-to-r from-purple-600 to-indigo-700 text-white hover:from-purple-700 hover:to-indigo-800 shadow-lg hover:shadow-purple-500/50";
  const outlineClasses = "bg-transparent text-purple-300 border border-purple-500 hover:bg-purple-800/30 hover:border-purple-300";

  return (
    <motion.a
      {...props}
      className={`${baseClasses} ${variant === "outline" ? outlineClasses : primaryClasses}`}
      whileHover={{ scale: 1.05, translateY: -3 }}
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
      staggerChildren: 0.03,
    },
  },
};

const characterVariants = {
  hidden: { opacity: 0, y: "1em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 0.8,
      ease: "easeOut",
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
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat animate-pulse-light"
          style={{ backgroundImage: "url('/Portfolio_Image.avif')" }} // <--- Updated to public path
        ></div>
        {/* Darker, more prominent overlay to enhance contrast against the vibrant background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-indigo-950 opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-gray-100 max-w-5xl mx-auto">
        <motion.div
          variants={letterVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
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
              className="inline-block text-purple-400 ml-3 cursor-pointer"
              variants={characterVariants}
              whileHover={{ scale: 1.05, color: "#a78bfa" }}
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
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light text-gray-300 leading-relaxed"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            {subtitleText}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
        >
          <Button href="#projects">View Projects</Button>
          <Button variant="outline" href="#contact">Hire Me</Button>
          <Button variant="primary" href="https://drive.google.com/uc?export=download&id=15-Tq_kJMO8LkLOYP0Q9qXXLpX78yJZNr" download>Download Resume</Button>
        </motion.div>
      </div>

      {/* Optional: Add a subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm animate-bounce"
      >
        Scroll Down
        <svg className="w-5 h-5 mx-auto mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </motion.div>

      {/* Global styles for the pulse animation if you decide to use it */}
      <style jsx global>{`
        @keyframes pulseLight {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.01);
          }
        }
        .animate-pulse-light {
          animation: pulseLight 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}