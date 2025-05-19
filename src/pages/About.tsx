// File: About.tsx
// Description: About page component displaying personal bio, education background, and academic achievements with styled sections in two columns, including Cloudflare (Heroicons) icons.

import { AcademicCapIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const About = () => {
  const achievements = [
    "Cum Laude Graduate",
    "Academic Scholar",
    "Dean's Lister",
    "PAIR Research Conference Best Oral Research Presenter",
    "PAIR Research Conference Best Abstract",
    "Rank 20th in 2024 Appcon Competition",
    "CCNAv7: Introduction to Networks",
    "PCAP: Programming Essentials in Python",
    "Cisco: Introduction to IoT",
    "CLA: Programming Essentials in C",
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto min-h-screen">
      <h2 className="text-4xl font-semibold mb-6 text-center">About Me</h2>
      <p className="mb-10 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center">
        I'm a passionate <span className="text-indigo-600 dark:text-indigo-400">software developer</span> with
        experience in building web applications using
        <span className="text-blue-600 dark:text-blue-400"> React</span>,
        <span className="text-green-600 dark:text-green-400"> TypeScript</span>,
        <span className="text-yellow-600 dark:text-yellow-400"> Node.js</span>, and more. I enjoy learning new
        technologies and creating
        <span className="text-pink-600 dark:text-pink-400"> fun</span>,
        <span className="text-emerald-600 dark:text-emerald-400"> efficient solutions</span>.
      </p>

      {/* Two Columns Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education Section */}
        <section>
          <h3 className="text-3xl font-semibold mb-4 flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
            <AcademicCapIcon className="w-7 h-7" />
            <span>Education</span>
          </h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-xl font-bold flex items-center space-x-2">
              <AcademicCapIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span>Bachelor of Science in Computer Science</span>
            </p>
            <p className="text-md italic mb-1">Columban College, Inc. - Olongapo, Philippines</p>
            <p className="mb-1">2021 - 2025</p>
            <p>
              Graduating: <span className="font-semibold">June 18, 2025</span>
            </p>
          </div>
        </section>

        {/* Academic Achievements Section */}
        <section>
          <h3 className="text-3xl font-semibold mb-4 flex items-center space-x-2 text-green-600 dark:text-green-400">
            <CheckCircleIcon className="w-7 h-7" />
            <span>Academic Achievements</span>
          </h3>
          <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
