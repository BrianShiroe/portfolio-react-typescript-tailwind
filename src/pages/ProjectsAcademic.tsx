// src/pages/ProjectsAcademic.tsx
// Displays categorized academic projects.
// Each project includes a title, icon, description, image, link, and hashtags.

import React from "react";
import type { ReactNode } from "react";
import { FaRobot, FaGlobe, FaDesktop } from "react-icons/fa";

interface ExtraLink {
  href: string;
  text: string;
}

interface Project {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  imgSrc: string;
  link: string;
  linkText: string;
  disabled: boolean;
  btnStyle?: React.CSSProperties;
  extraLink?: ExtraLink;
  hashtags?: string[];
}

const projectsAcademic: Project[] = [
  {
    id: "pp7",
    title: "Luka",
    icon: <FaRobot />,
    description: `An accident and disaster detection CCTV monitoring system that offers real-time accident detection, 
      live CCTV streaming, incident playback and recording, intelligent analytics, and IoT camera integration. 
      The detection model was trained on 18k image data, with 100 epochs, 640 image size, 16 batch size, and 8 workers.`,
    imgSrc: "/images/project-images/project7.jpg",
    link: "https://github.com/LCbalsa/calbi-luka.git",
    linkText: "PRIVATE PROJECT!",
    disabled: true,
    btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
    hashtags: ["#machinelearning", "#python", "#iot", "#opencv", "#yolo"],
  },
  {
    id: "pp2",
    title: "Web-Based IT Inventory Monitoring System",
    icon: <FaGlobe />,
    description: `A web-based inventory monitoring system designed for the IT
     department of DPWH, enabling users to efficiently store, track, 
      and manage all computer hardware assets required by the organization.`,
    imgSrc: "/images/project-images/project10.png",
    link: "",
    linkText: "PRIVATE PROJECT!",
    disabled: true,
    btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
    hashtags: ["#webdevelopment", "#xampp", "#mysql", "php", "apache", "phpmyadmin"],
  },
  {
    id: "pp9",
    title: "TPP: A Web-Based Editorial Platform",
    icon: <FaGlobe />,
    description: `A web-based editorial platform developed for The Premier Post, 
      a school-affiliated organization dedicated to publishing campus news and updates.`,
    imgSrc: "/images/project-images/project9.png",
    link: "",
    linkText: "PRIVATE PROJECT!",
    disabled: true,
    btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
    hashtags: ["#webdevelopment", "#xampp", "#mysql", "php", "apache", "phpmyadmin"],
  },
  {
    id: "pp8",
    title: "Manaheartz Handicrafts Store Product Management System",
    icon: <FaDesktop />,
    description: `A Computer Based Management System used to store all
     the products of the Manaheartz Handicrafts Store.`,
    imgSrc: "/images/project-images/project8.1.png",
    link: "/assets/manaheartz-project.pdf",
    linkText: "PRIVATE PROJECT!",
    disabled: true,
    btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
    hashtags: ["#webdevelopment", "#xampp", "#mysql", "php", "apache", "phpmyadmin"],
  },
];

const ProjectCard: React.FC<Project> = ({
  title,
  icon,
  description,
  imgSrc,
  link,
  linkText,
  disabled,
  btnStyle,
  extraLink,
  hashtags,
}) => (
  <div
    className="project animated bounce-in border rounded
   shadow p-4 mb-6 flex flex-col gap-4 md:flex-row md:gap-6"
  >
    <img src={imgSrc} alt={title} className="w-full md:w-48 object-cover rounded" />
    <div className="content flex flex-col justify-between">
      <h2 className="text-2xl font-semibold flex items-center space-x-2 mb-2">
        {icon}
        <span>{title}</span>
      </h2>
      <p className="mb-4 text-justify">{description}</p>

      <div className="flex flex-wrap items-center justify-between">
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn inline-block px-4 py-2 rounded font-semibold transition-colors duration-300 ${
              disabled
                ? "bg-red-600 text-white cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-400 dark:hover:bg-indigo-500"
            }`}
            style={btnStyle}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : undefined}
            onClick={disabled ? (e) => e.preventDefault() : undefined}
          >
            <span>{linkText}</span>
          </a>
          {extraLink && (
            <a
              href={extraLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-block px-4 py-2 rounded text-white font-semibold ml-3 bg-blue-600 hover:bg-blue-700"
            >
              {extraLink.text}
            </a>
          )}
        </div>

        {hashtags && hashtags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {hashtags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 text-base font-mono rounded
                   text-indigo-700 bg-indigo-100
                   dark:text-yellow-300 dark:bg-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const ProjectsAcademic: React.FC = () => (
  <div className="p-6 max-w-6xl mx-auto">
    <h1 className="animated bounce-in text-4xl font-bold mb-6 text-center">ACADEMIC PROJECTS</h1>
    <div className="projects-container academic">
      {projectsAcademic.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default ProjectsAcademic;
