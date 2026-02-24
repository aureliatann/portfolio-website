import { useRef } from "react";

// DEVICON MAP
const skillIcons = {
  Python: "devicon-python-plain",
  JavaScript: "devicon-javascript-plain",
  Java: "devicon-java-plain",
  C: "devicon-c-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain", 
  SQL: "devicon-mysql-plain",
  Django: "devicon-django-plain",
  SQLite: "devicon-sqlite-plain",
  React: "devicon-react-original",
  "Tailwind CSS": "devicon-tailwindcss-plain",
  Git: "devicon-git-plain",
  "VS Code": "devicon-vscode-plain",
  IntelliJ: "devicon-intellij-plain",
  MySQL: "devicon-mysql-plain",
  Figma: "devicon-figma-plain",
  Unity: "devicon-unity-plain",
  Jupyter: "devicon-jupyter-plain",
  Pandas: "devicon-pandas-plain",
  NLTK: "devicon-python-plain",
  Seaborn: "devicon-matplotlib-plain",
  "Node.js": "devicon-nodejs-plain",
  "Express.js": "devicon-express-original",
  MongoDB: "devicon-mongodb-plain",
  Mongoose: "devicon-mongoose-original"
}

// -------------------- PROJECTS --------------------
export default function Projects() {
  const projects = [
    {
      title: "Event Registration Portal",
      subtitle: "Website for MUISA's The Forum 2026",
      description: "Developed and deployed a Django portal to streamline event registration and ticketing via automated emails.",
      role: "Full-Stack Developer",
      stack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Python", "Django", "SQLite"]
      },
      thumb: "/images/theforum-thumb.png",
      video: "",
    },
    {
      title: "Personal Portfolio",
      subtitle: "Website",
      description: "Developed an interactive portfolio website using the MERN stack, including a backend API for handling contact form submissions.",
      role: "Full-Stack Developer",
      stack: {
        frontend: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      },
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
      role: "Author/Programmer",
      tools: ["Python", "Pandas", "Seaborn", "NLTK", "Jupyter"],
      thumb: "/images/dataessay-thumb.png",
      video: "/videos/dataessay.mp4",
    },
    {
      title: "Organization Website",
      subtitle: "Website for MUISA",
      description: "Designed and updated MUISA's public-facing website according to the ogranization's needs to enhance digital presence.",
      role: "Designer",
      tools: [],
      thumb: "/images/ppiawebsite-thumb.png",
      video: "/videos/ppiawebsite.mp4",
    },
  ];

   return (
    <section id="projects" className="w-full py-12 space-y-8">
      {/* Heading */}
      <h2 className="text-[#4e1f2f] font-heading font-extrabold tracking-wider leading-tight drop-shadow-lg text-center text-5xl sm:text-6xl">
        Projects
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((proj) => (
          <ProjectWithVideo key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}
// ---------------- PROJECT CARD ----------------
function ProjectWithVideo({ title, subtitle, description, role, tools, stack, thumb, video }) {
  const videoRef = useRef(null);

  return (
    <div
      className="rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 
             text-[#3f3a3a] group cursor-pointer transition-transform 
             hover:scale-105 duration-300 overflow-hidden shadow-xl hover:shadow-2xl"
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) videoRef.current.pause();
      }}
    >
      {/* Thumbnail with hover video */}
      <div className="relative w-full h-72 overflow-hidden rounded-t-xl">
        <img
          src={thumb}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover object-top"
        />
        {video && (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-top 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>

      <div className="p-6 space-y-3">
      {/* Group title + subtitle */}
      <div className="space-y-1"> {/* <- much smaller gap */}
        <div className="flex justify-between items-center">
          <h3 className="text-[#4e1f2f] font-bold text-2xl sm:text-2.25xl">
            {title}
          </h3>
          <p className="text-[#4e1f2f] text-lg sm:text-xl font-semibold">{role}</p>
        </div>
        <p className="text-base sm:text-lg text-[#3f3a3a]">{subtitle}</p>
      </div>

        {/* Tech Stack */}
        {stack ? (
          <div className="mt-3 space-y-3">
            {/* Frontend */}
            {stack.frontend?.length > 0 && (
              <div className="flex items-center gap-3"> {/* gap between FE label and badges */}
                <p className="font-bold text-[#4e1f2f]">{/* no min-w */}FE</p>
                <div className="flex flex-wrap gap-1"> {/* badges closer together */}
                  {stack.frontend.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-2 py-0.5
                                bg-[#f2e8e9] rounded-xl text-[#4e1f2f] 
                                text-xs sm:text-sm border border-[#e5dcdc]"
                    >
                      {skillIcons[tech] && <i className={`${skillIcons[tech]} text-xs`} />}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Backend */}
            {(stack.backend?.length > 0 || stack.database?.length > 0) && (
              <div className="flex items-center gap-3">
                <p className="font-bold text-[#4e1f2f]">BE</p>
                <div className="flex flex-wrap gap-1">
                  {[...(stack.backend || []), ...(stack.database || [])].map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-2 py-0.5
                                bg-[#f2e8e9] rounded-xl text-[#4e1f2f] 
                                text-xs sm:text-sm border border-[#e5dcdc]"
                    >
                      {skillIcons[tech] && <i className={`${skillIcons[tech]} text-xs`} />}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Tools for non-fullstack */
          tools?.length > 0 && (
            <div className="flex flex-wrap justify-start gap-3 mt-3">
              {tools.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 px-2 py-0.5
                                 bg-[#f2e8e9] rounded-xl text-[#4e1f2f] 
                                 text-xs sm:text-sm border border-[#e5dcdc]"
                >
                  {skillIcons[tech] && <i className={`${skillIcons[tech]} text-xs`} />}
                  {tech}
                </span>
              ))}
            </div>
          )
        )}

        {/* Description */}
        <p className="text-base sm:text-lg text-[#3f3a3a] mt-2 font-body">
          {description}
        </p>
      </div>
    </div>
  );
}