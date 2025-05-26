// src/components/SocialSidebar.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

const SocialSidebar = () => {
  return (
    <div className="fixed bottom-0 right-6 flex flex-col items-center z-50 text-gray-600 dark:text-gray-300">
      {/* Top Line */}
      <div className="w-px h-10 bg-gray-400 dark:bg-gray-500" />

      {/* Icons embedded in the line */}
      <ul className="flex flex-col items-center space-y-4">
        <li>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors duration-300">
              <FaLinkedin className="text-lg group-hover:text-white" />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-black dark:hover:bg-white transition-colors duration-300">
              <FaGithub className="text-lg group-hover:text-white dark:group-hover:text-black" />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://your-itch-profile.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-red-500 transition-colors duration-300">
              <SiItchdotio className="text-lg group-hover:text-white" />
            </div>
          </a>
        </li>
        <li>
          <a href="mailto:you@example.com" className="group">
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-yellow-500 transition-colors duration-300">
              <FaEnvelope className="text-lg group-hover:text-white" />
            </div>
          </a>
        </li>
      </ul>

      {/* Bottom Line */}
      <div className="w-px h-10 bg-gray-400 dark:bg-gray-500 mt-4" />
    </div>
  );
};

export default SocialSidebar;
