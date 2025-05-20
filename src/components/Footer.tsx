// src/components/Footer.tsx
import type { Theme } from "../utils/theme";

interface FooterProps {
  theme: Theme;
}

const Footer = ({ theme }: FooterProps) => {
  return (
    <footer
      className={`${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-200"
      } text-center py-6 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300`}
    >
      <p>© {new Date().getFullYear()} Brian Haw. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
