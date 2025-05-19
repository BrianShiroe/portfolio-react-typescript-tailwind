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

  useEffect(() => {
    if (menuRef.current) {
      setMaxHeight(mobileMenuOpen ? `${menuRef.current.scrollHeight}px` : '0px');
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-4 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">MyPortfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-sm sm:text-base text-gray-900 dark:text-gray-100 hover:underline px-2 py-1"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-sm sm:text-base px-3 py-1 text-gray-900 dark:text-gray-100 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{ maxHeight }}
        className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="flex flex-col gap-2 mt-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-b shadow">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              onClick={handleLinkClick}
              href={`#${section}`}
              className="text-gray-900 dark:text-gray-100 hover:underline py-2"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMobileMenuOpen(false);
            }}
            aria-label="Toggle Theme"
            className="text-left text-gray-900 dark:text-gray-100 hover:underline py-2"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
