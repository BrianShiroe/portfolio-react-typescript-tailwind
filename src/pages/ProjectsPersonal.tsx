// src/pages/ProjectsPersonal.tsx
// Displays categorized personal projects.
// Each project includes a title, icon, description, image, and link.

import React from "react";
import type { ReactNode } from "react";
import { FaRobot, FaGamepad } from "react-icons/fa";

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
}

const projectsPersonal: Project[] = [
  {
    id: "pp3",
    title: "Collision, Fire, and Smoke Detection Model",
    icon: <FaRobot />,
    description: `A machine learning model capable of detecting car crashes from images, videos and live feed, trained on 15,000 image data.`,
    imgSrc: "/images/project-images/project3.2.png",
    link: "https://github.com/BrianShiroe/yolov11-collision-fire-smoke-detection.git",
    linkText: "Click Here To View on Github!",
    disabled: false,
    btnStyle: {},
  },
  {
    id: "pp5",
    title: "Flood Segmentation Model",
    icon: <FaRobot />,
    description: `A machine learning model capable of segmenting floods from images, videos and live feed, trained on 2,000 image data.`,
    imgSrc: "/images/project-images/project5.1.jpg",
    link: "https://github.com/BrianShiroe/yolov11-flood-detection.git",
    linkText: "Click Here To View on Github!",
    disabled: false,
    btnStyle: {},
  },
  {
    id: "pp6",
    title: "Landslide Segmentation Model",
    icon: <FaRobot />,
    description: `A machine learning model capable of segmenting landslides from images, videos and live feed, trained on 500 image data.`,
    imgSrc: "/images/project-images/project6.1.png",
    link: "https://github.com/BrianShiroe/yolov11-landslide-detection.git",
    linkText: "Click Here To View on Github!",
    disabled: false,
    btnStyle: {},
  },
  {
    id: "pp1",
    title: "Shadow Monarch",
    icon: <FaGamepad />,
    description: `A 2D action adventure game made with Godot, using basic character functionalities, (e.g. movement, attack pattern,
      skills, etc.) and enemy ai logic (e.g. path finding, finite state machine, perception system, etc.).`,
    imgSrc: "/images/project-images/project1.png",
    link: "https://mun-development.itch.io/shadow-monarch-the-cats-adventure",
    linkText: "Click Here To View on itch.io!",
    disabled: false,
    btnStyle: {},
  },
  {
    id: "pp2-2",
    title: "The Goddess' Trial",
    icon: <FaGamepad />,
    description: `A 2D speedrun platformer game made using the unity game engine, submitted for the 5th SpeedJam competition hosted in itch.io.`,
    imgSrc: "/images/project-images/project2.png",
    link: "https://mun-development.itch.io/the-goddess-trial",
    linkText: "Click Here To View on itch.io!",
    disabled: false,
    btnStyle: {},
  },
  {
    id: "pp11",
    title: "WOB and COB",
    icon: <FaGamepad />,
    description: `A simple 2D box-collection game made in unity. Game is hosted in itch.io.`,
    imgSrc: "/images/project-images/project11.jpg",
    link: "https://mun-development.itch.io/wob-cob",
    linkText: "Click Here To View on itch.io!",
    disabled: false,
    btnStyle: {},
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
}) => (
  <div className="project animated bounce-in border rounded shadow p-4 mb-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
    <img src={imgSrc} alt={title} className="w-full md:w-48 object-cover rounded" />
    <div className="content flex flex-col justify-between">
      <h2 className="text-2xl font-semibold flex items-center space-x-2 mb-2">
        {icon}
        <span>{title}</span>
      </h2>
      <p className="mb-4 text-justify">{description}</p>
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
          {linkText}
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
    </div>
  </div>
);

const ProjectsPersonal: React.FC = () => (
  <div className="p-6 max-w-6xl mx-auto">
    <h1 className="animated bounce-in text-4xl font-bold mb-6 text-center">PERSONAL PROJECTS</h1>
    <div className="projects-container personal">
      {projectsPersonal.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default ProjectsPersonal;