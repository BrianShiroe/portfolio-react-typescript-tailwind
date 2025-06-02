// src/components/SocialSidebar.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

const SocialSidebar = () => {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 flex-row items-center z-50 text-gray-600 dark:text-gray-300 space-x-4">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/brianshiroe"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="p-4 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 group-hover:bg-blue-500">
          <FaLinkedin className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-white" />
        </div>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/brianshiroe"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="p-4 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 group-hover:bg-black dark:group-hover:bg-gray-200">
          <FaGithub className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black" />
        </div>
      </a>

      {/* Itch.io */}
      <a
        href="https://mun-development.itch.io"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="p-4 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 group-hover:bg-red-500">
          <SiItchdotio className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-white" />
        </div>
      </a>

      {/* Email */}
      <a href="mailto:brianshiroe@gmail.com" className="group">
        <div className="p-4 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 group-hover:bg-yellow-500">
          <FaEnvelope className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black" />
        </div>
      </a>
    </div>
  );
};

export default SocialSidebar;
