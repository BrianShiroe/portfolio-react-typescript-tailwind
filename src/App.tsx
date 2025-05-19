import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Clean, easy-on-the-eyes shades of white for light mode
  const lightBgColors = ["bg-white", "bg-gray-50"];
  const darkBgColors = ["bg-gray-900", "bg-gray-800"];

  const getBgClass = (index: number) => (theme === "light" ? lightBgColors[index % 2] : darkBgColors[index % 2]);

  return (
    <div
      className={`${
        theme === "dark" ? "font-mono bg-gray-900" : "font-inter bg-white"
      } text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen`}
    >
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Add top padding equal to navbar height (e.g., 64px = 16 * 4) */}
      <main className="pt-0">
        <section id="home" className={`${getBgClass(0)} min-h-screen border-b border-gray-300 dark:border-gray-700`}>
          <Home />
        </section>

        <section
          id="about"
          className={`${getBgClass(1)} min-h-screen border-b border-gray-300 dark:border-gray-700 pt-12`}
        >
          <About />
        </section>

        <section
          id="skills"
          className={`${getBgClass(2)} min-h-screen border-b border-gray-300 dark:border-gray-700 pt-12`}
        >
          <Skills />
        </section>

        <section
          id="projects"
          className={`${getBgClass(3)} min-h-screen border-b border-gray-300 dark:border-gray-700 pt-12`}
        >
          <Projects />
        </section>

        <section id="contact" className={`${getBgClass(4)} min-h-screen pt-12`}>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
