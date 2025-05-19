import React from "react";
import type { ReactNode } from "react";
import { FaLaptopCode, FaRobot, FaGlobe, FaDesktop, FaGamepad } from "react-icons/fa";

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

interface ProjectsData {
  academic: Project[];
  personal: Project[];
}

const projects: ProjectsData = {
  academic: [
    {
      id: "pp7",
      title: "Luka",
      icon: <FaRobot />,
      description: `An accident and disaster detection CCTV monitoring system that offers real-time accident detection, 
        live CCTV streaming, incident playback and recording, intelligent analytics, and IoT camera integration. 
        The detection model was trained on 18k image data, with 100 epochs, 640 image size, 16 batch size, and 8 workers.`,
      imgSrc: "/images/project-images/project7.jpg",
      link: "https://github.com/LCbalsa/calbi-luka.git",
      linkText: "Polishing!",
      disabled: true,
      btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
    },
    {
      id: "pp2",
      title: "Web-Based IT Inventory Monitoring System",
      icon: <FaGlobe />,
      description: `A web-based inventory monitoring system designed for the IT department of DPWH, enabling users to efficiently store, track, 
        and manage all computer hardware assets required by the organization.`,
      imgSrc: "/images/project-images/project10.png",
      link: "",
      linkText: "PRIVATE PROJECT!",
      disabled: true,
      btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
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
    },
    {
      id: "pp8",
      title: "Manaheartz Handicrafts Store Product Management System",
      icon: <FaDesktop />,
      description: `A Computer Based Management System used to store all the products of the Manaheartz Handicrafts Store.`,
      imgSrc: "/images/project-images/project8.1.png",
      link: "/assets/manaheartz-project.pdf",
      linkText: "PRIVATE PROJECT!",
      disabled: true,
      btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
    },
  ],
  personal: [
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
  ],
};

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
      <p className="mb-4">{description}</p>
      <div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn inline-block px-4 py-2 rounded text-white font-semibold"
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

const Projects: React.FC = () => (
  <div className="p-6 max-w-6xl mx-auto">
    <h1 className="animated bounce-in flex items-center space-x-3 text-4xl font-bold mb-6">
      <FaLaptopCode />
      <span>ACADEMIC PROJECTS</span>
    </h1>
    <div className="projects-container academic mb-12">
      {projects.academic.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>

    <h1 className="animated bounce-in flex items-center space-x-3 text-4xl font-bold mb-6">
      <FaLaptopCode />
      <span>PERSONAL PROJECTS</span>
    </h1>
    <div className="projects-container personal">
      {projects.personal.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;
