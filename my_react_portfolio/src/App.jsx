import { useState, useEffect } from "react";
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbsr';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Project';
import ThemeToggle from "./components/UI/ThemeToggle";
function App() {
  const [darkMode, setDarkMode] = useState(false);
 // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

 const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-gray-200 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      </div>
    </>
  );
}

export default App;
