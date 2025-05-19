// Navbar.tsx
// Responsive Navbar component with dark/light theme toggle and animated mobile menu

import { useState, useRef, useEffect } from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  // Adjust maxHeight for animation
  useEffect(() => {
    if (menuRef.current) {
      if (mobileMenuOpen) {
        setMaxHeight(menuRef.current.scrollHeight + 'px');
      } else {
        setMaxHeight('0px');
      }
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">MyPortfolio</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <a className="text-gray-900 dark:text-gray-100 hover:underline" href="#home">Home</a>
          <a className="text-gray-900 dark:text-gray-100 hover:underline" href="#about">About</a>
          <a className="text-gray-900 dark:text-gray-100 hover:underline" href="#projects">Projects</a>
          <a className="text-gray-900 dark:text-gray-100 hover:underline" href="#contact">Contact</a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-gray-900 dark:text-gray-100 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {/* X icon */}
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {/* Hamburger icon */}
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Links with animation */}
      <div
        ref={menuRef}
        style={{ maxHeight }}
        className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="mt-2 space-y-2 px-2 py-2 bg-white dark:bg-gray-800 rounded-b shadow-md">
          <a
            onClick={handleLinkClick}
            className="block text-gray-900 dark:text-gray-100 hover:underline"
            href="#home"
          >
            Home
          </a>
          <a
            onClick={handleLinkClick}
            className="block text-gray-900 dark:text-gray-100 hover:underline"
            href="#about"
          >
            About
          </a>
          <a
            onClick={handleLinkClick}
            className="block text-gray-900 dark:text-gray-100 hover:underline"
            href="#projects"
          >
            Projects
          </a>
          <a
            onClick={handleLinkClick}
            className="block text-gray-900 dark:text-gray-100 hover:underline"
            href="#contact"
          >
            Contact
          </a>
          <button
            onClick={() => {
              toggleTheme();
              setMobileMenuOpen(false);
            }}
            aria-label="Toggle Theme"
            className="block w-full text-left text-gray-900 dark:text-gray-100 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
