// File: Home.tsx
// Description: Home Page with enlarged profile picture, centered text, and heroicons accents.

import profilePic from '../assets/images/profile-picture.png';
import { CodeBracketIcon, CpuChipIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Home = () => (
  <main className="p-6 flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto text-center">
    {/* Enlarged Profile Picture */}
    <div
      className="w-56 h-56 rounded-full overflow-hidden shadow-xl mb-8 transition-transform duration-300 ease-in-out hover:scale-105"
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

    {/* Centered Text */}
    <header aria-label="Welcome header">
      <h2 className="text-4xl font-semibold mb-4 inline-flex items-center justify-center space-x-3 text-indigo-700 dark:text-indigo-400">
        <CodeBracketIcon className="w-8 h-8 animate-pulse" />
        <span>Welcome to My Portfolio</span>
      </h2>

      <h1 className="text-5xl font-bold mb-4 inline-flex items-center justify-center space-x-3 text-green-700 dark:text-green-400 tracking-wide">
        <AcademicCapIcon className="w-9 h-9 animate-bounce" />
        <span>BRIAN HAW</span>
      </h1>
    </header>

    <section aria-label="Professional description" className="max-w-lg mx-auto">
      <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300 inline-flex items-center justify-center space-x-2">
        <CpuChipIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
        <span>Full Stack Python Developer | AI, Machine Learning, & Game Enthusiast</span>
      </h3>
    </section>
  </main>
);

export default Home;
