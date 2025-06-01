// src/pages/About.tsx
// Displays personal background, education details, and academic achievements .

import { AcademicCapIcon, TrophyIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const About = () => {
  const achievements = [
    "Cum Laude Graduate",
    "Academic Scholar",
    "Dean's Lister",
    "Placed in the Top 20 at the 2024 AppCon Competition",
    "PAIR Research Conference Best Oral Research Presenter",
    "PAIR Research Conference Best Abstract",
  ];

  const awardsAndCertificates = [
    "CLP: Advanced Programming in C",
    "CLA: Programming Essentials in C",
    "CCNAv7: Introduction to Networking",
    "PCAP: Programming Essentials in Python",
    "Cisco: Introduction to IoT",
  ];

  const educationDetails = [
    "Degree: Bachelor of Science in Computer Science",
    "Institution: Columban College, Inc., Philippines",
    "Years Attended: 2021 - 2025",
    "Expected Graduation: June 18, 2025",
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen">
      <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>

      <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-justify">
        Cum Laude <span className="text-indigo-600 dark:text-indigo-400 font-semibold">BSCS graduate</span> with a
        multi-awarded thesis.{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Former lead developer</span> at Calbi,
        architected <span className="text-indigo-600 dark:text-indigo-400 font-semibold">computer vision AI</span> with
        emergent heuristics that audit their own operational ontology, enabling anomaly detection and recursive
        disruptions in self-referential coherence. A pixel 2D engineer in{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Mun Development</span>, who pioneered
        scalable spaghetti architectures on bleeding-edge frameworks, treating entropy as a feature, not a bug.
        Transitioned systems from functional to strictly local and continue my quest to become one of the{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">greatest developers that ever lived</span>.
      </p>

      {/* 3-column layout for Education, Achievements, Awards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Education */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-indigo-600 dark:text-indigo-400">
            <AcademicCapIcon className="w-8 h-8" />
            <span>Education</span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {educationDetails.map((detail) => (
              <li key={detail} className="flex items-center space-x-2">
                <AcademicCapIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-green-600 dark:text-green-400">
            <TrophyIcon className="w-8 h-8" />
            <span>Achievements</span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex items-center space-x-2">
                <TrophyIcon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Awards & Certificates */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-yellow-600 dark:text-yellow-400">
            <CheckBadgeIcon className="w-8 h-8" />
            <span>Awards & Certificates</span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {awardsAndCertificates.map((award) => (
              <li key={award} className="flex items-center space-x-2">
                <CheckBadgeIcon className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
