// File: Home.tsx
// Description: Responsive and accessible home page featuring a profile image,
// animated heroicons, and professional introduction with dark mode support.

import profilePic from "../assets/images/profile-picture.png";
import { CodeBracketIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const Home = () => (
  <main className="p-6 md:p-12 flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto text-center">
    {/* Profile Picture */}
    <div
      className="w-56 h-56 sm:w-54 sm:h-54 rounded-full overflow-hidden shadow-2xl mb-8 transition-transform duration-300 ease-in-out hover:scale-105"
      aria-label="Profile picture of Brian O. Haw"
    >
      <img
        src={profilePic}
        alt="Brian O. Haw smiling"
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>

    {/* Header Section */}
    <header aria-label="Welcome section" className="space-y-3 px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold inline-flex items-center justify-center space-x-3">
        <CodeBracketIcon className="w-8 h-8 sm:w-9 sm:h-9 animate-pulse text-indigo-700 dark:text-indigo-400" />
        <span>Welcome to My Portfolio</span>
        <CodeBracketIcon className="w-8 h-8 sm:w-9 sm:h-9 animate-pulse text-indigo-700 dark:text-indigo-400" />
      </h2>

      <h1 className="text-4xl sm:text-5xl font-bold inline-flex items-center justify-center space-x-3 text-green-700 dark:text-green-400 tracking-wide">
        <AcademicCapIcon className="w-10 h-10 sm:w-11 sm:h-11 animate-bounce" />
        <span>BRIAN HAW</span>
        <AcademicCapIcon className="w-10 h-10 sm:w-11 sm:h-11 animate-bounce" />
      </h1>
    </header>

    {/* Description Section */}
    <section
      aria-label="Professional description"
      className="mt-3 px-4 max-w-2xl text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 inline-flex items-center justify-center text-center space-x-2"
    >
      <span>· Full Stack Developer · Machine Learning, AI & Game Enthusiast ·</span>
    </section>
  </main>
);

export default Home;
