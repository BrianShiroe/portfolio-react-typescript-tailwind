// File: Home.tsx
// Description: Responsive and accessible home page featuring a profile image,
// animated heroicons, and professional introduction with dark mode support.

import { AcademicCapIcon } from "@heroicons/react/24/outline";

const Home = () => (
  <main className="p-6 md:p-12 flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto text-center">
    {/* Header Section */}
    <header aria-label="Welcome section" className="space-y-3 px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold inline-flex items-center justify-center space-x-3">
        <span>Welcome to My Portfolio</span>
      </h2>
    </header>

    {/* Profile Picture */}
    <div
      className="w-56 h-56 sm:w-54 sm:h-54 rounded-full overflow-hidden shadow-2xl my-6 transition-transform duration-300 ease-in-out hover:scale-105"
      aria-label="Profile picture of Brian O. Haw"
    >
      <img
        src="/images/home-images/profile-picture.png"
        alt="Brian O. Haw smiling"
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>

    {/* Name Section */}
    <h1 className="text-4xl sm:text-5xl font-bold inline-flex items-center justify-center space-x-3 text-green-700 dark:text-green-400 tracking-wide">
      <AcademicCapIcon className="w-10 h-10 sm:w-11 sm:h-11 animate-bounce" />
      <span>BRIAN HAW</span>
      <AcademicCapIcon className="w-10 h-10 sm:w-11 sm:h-11 animate-bounce" />
    </h1>

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
