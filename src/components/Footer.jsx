import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center text-center md:space-y-0 space-y-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ambika Jaiswal. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}