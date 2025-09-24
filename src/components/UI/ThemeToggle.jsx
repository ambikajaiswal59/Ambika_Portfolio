import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-lg hidden"
      aria-label="Toggle Theme"
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
