import { useRef } from "react";

// DEVICON MAP
const skillIcons = {
  Python: "devicon-python-plain",
  JavaScript: "devicon-javascript-plain",
  Java: "devicon-java-plain",
  C: "devicon-c-plain",
  "HTML/CSS": "devicon-html5-plain",
  SQL: "devicon-mysql-plain",
  Django: "devicon-django-plain",
  React: "devicon-react-original",
  "Tailwind CSS": "devicon-tailwindcss-plain",
  Git: "devicon-git-plain",
  "VS Code": "devicon-vscode-plain",
  IntelliJ: "devicon-intellij-plain",
  MySQL: "devicon-mysql-plain",
  Figma: "devicon-figma-plain",
  Unity: "devicon-unity-plain colored",
  Jupyter: "devicon-jupyter-plain",
  Pandas: "devicon-pandas-plain colored",
  NLTK: "devicon-python-plain",
  Seaborn: "devicon-matplotlib-plain"
}

// -------------------- PROJECTS --------------------
export default function Projects() {
  const projects = [
    {
      title: "Event Registration Portal",
      subtitle: "Website for The Forum 2026, Organized by MUISA",
      description: "Developed and deployed a Django portal to streamline event registration and ticketing via automated emails.",
      role: "Full-Stack Developer",
      tools: ["Django", "Python", "JavaScript", "HTML/CSS"],
      thumb: "/images/theforum-thumb.png",
      video: "",
    },
    {
      title: "Personal Portfolio",
      subtitle: "Website",
      description: "Developed an interactive portfolio website with React to display personal expertise.",
      role: "Front-End Developer",
      tools: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      thumb: "/images/portfolio-thumb.png",
      video: "",
    },
    {
      title: "Overgrown",
      subtitle: "2D RPG Game for CISSAxGMC Game Jam 2025",
      description: "Designed art and UI assets and developed level layouts in Unity by managing prefabs and scene architecture.",
      role: "Designer",
      tools: ["Unity"],
      thumb: "/images/overgrown-thumb.jpg",
      video: "/videos/overgrown.mp4",
    },
    {
      title: "Shadow Donkey Kong",
      subtitle: "2D Platformer Game",
      description: "Applied OOP in Java to develop a platformer with responsive player controls, game mechanics, and gravity physics.",
      role: "Programmer",
      tools: ["Java"],
      thumb: "/images/donkeykong-thumb.png",
      video: "/videos/donkeykong.mp4",
    },
    {
      title: "Language of Deception",
      subtitle: "Data Essay on a Kaggle Dataset",
      description: "Analyzed public datasets with Python, conducting text analysis and interpreting results through a social science lens.",
      role: "Author and Programmer",
      tools: ["Python", "Pandas", "Seaborn", "NLTK", "Jupyter"],
      thumb: "/images/dataessay-thumb.png",
      video: "/videos/dataessay.mp4",
    },
  ];

  return (
    <section id="projects" className="w-full py-12 space-y-8">
      {/* Heading */}
      <h2 className="text-center text-4xl sm:text-5xl font-bold text-gray-900">
        PROJECTS
      </h2>
      <p className="text-center text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
        Here’s a showcase of my personal projects, each highlighting the tools I’ve used that have helped refine my skillset.
      </p>
      
      {/* ---------------- Project Grid ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 sm:px-6">
        {projects.map((proj) => (
          <ProjectWithVideo key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}

// ---------------- Project Card ----------------
function ProjectWithVideo({ title, subtitle, description, role, tools, thumb, video }) {
  const videoRef = useRef(null);

  return (
    <div
      className="rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 text-primaryText group cursor-pointer transition-transform hover:scale-105 duration-300 overflow-hidden"
      onMouseEnter={() => videoRef.current && videoRef.current.play()}
      onMouseLeave={() => videoRef.current && videoRef.current.pause()}
    >
      {/* Fixed-height image/video container */}
      <div className="relative w-full h-72 overflow-hidden rounded-t-xl">
        <img
          src={thumb}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover"
        />
        {video && (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>

      {/* Project info */}
      <div className="p-6 space-y-1">
        <h3 className="font-heading font-bold text-2xl sm:text-2.25xl text-headingAccent">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-secondaryText">{subtitle}</p>
        <p className="text-lg sm:text-xl text-primaryText font-semibold">{role}</p>

        {/* Tools (with Devicon logos) */}
        <div className="flex flex-wrap gap-3 mt-3">
          {tools.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 px-5 py-2 bg-gray-100 rounded-lg text-gray-700 text-base sm:text-lg font-medium"
            >
              {skillIcons[tech] && <i className={`${skillIcons[tech]} text-lg`}></i>}
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-primaryText mt-2 font-body">{description}</p>
      </div>
    </div>
  );
}