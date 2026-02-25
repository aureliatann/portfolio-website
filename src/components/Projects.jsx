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
};

// -------------------- PROJECTS --------------------
export default function Projects() {
  const projects = [
    {
      title: "The Forum 2026",
      subtitle: "Event Registration Website",
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
      title: "AT",
      subtitle: "Portfolio Website",
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
      title: "MUISA Website",
      subtitle: "Organization Website",
      description: "Designed and updated MUISA's public-facing website according to the organization's needs to enhance digital presence.",
      role: "Designer",
      tools: [],
      thumb: "/images/ppiawebsite-thumb.png",
      video: "/videos/ppiawebsite.mp4",
    },
    {
      title: "Overgrown",
      subtitle: "2D RPG Game",
      description: "Designed art and UI assets and developed level layouts in Unity by managing prefabs and scene architecture.",
      role: "Designer",
      tools: ["Unity"],
      thumb: "/images/overgrown-thumb.jpg",
      video: "/videos/overgrown.mp4",
    },
    {
      title: "Donkey Kong Clone",
      subtitle: "2D Platformer Game",
      description: "Applied OOP in Java to develop a platformer with responsive player controls, game mechanics, and gravity physics.",
      role: "Programmer",
      tools: ["Java"],
      thumb: "/images/donkeykong-thumb.png",
      video: "/videos/donkeykong.mp4",
    },
    {
      title: "Language of Deception",
      subtitle: "Data Essay",
      description: "Analyzed Kaggle datasets with Python, conducting text analysis and interpreting results through a social science lens.",
      role: "Author/Programmer",
      tools: ["Python", "Pandas", "Seaborn", "NLTK", "Jupyter"],
      thumb: "/images/dataessay-thumb.png",
      video: "/videos/dataessay.mp4",
    },
  ];

  return (
    <section id="projects" className="w-full py-12 px-4 lg:px-10">
      {/* Heading */}
      <h2 className="font-body tracking-wider font-bold text-[#0D0D0D] text-xl text-center">
        ['24 - PORTFOLIO - '26']
      </h2>
      <h2 className="font-body tracking-wider font-bold text-[#0D0D0D] text-5xl text-center mt-2">
        (FEATURED PROJECTS)
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
        {projects.map((proj, idx) => (
          <div key={proj.title} className="flex flex-col group h-full">
            {/* Wrap number + card in flex-col and grow card to match tallest */}
            <div className="flex flex-col h-full transform transition-transform duration-300 hover:scale-105">
              {/* Number label */}
              <h4 className="font-body text-xl text-[#0D0D0D] mb-1 transition-transform duration-300 group-hover:scale-105 origin-top-left">
                [{String(idx + 1).padStart(2, "0")}]
              </h4>

              {/* Card */}
              <ProjectWithVideo {...proj} />
            </div>
          </div>
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
      className="flex flex-col h-full rounded-xl bg-white/80 backdrop-blur-md border border-gray-200 
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
          alt={`${subtitle} thumbnail`}
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

      <div className="p-6 space-y-3 flex flex-col flex-grow">
        {/* Project Title */}
        <h3 className="font-heading font-bold text-2xl sm:text-2.25xl text-[#0D0D0D] mb-2">
          {title}
        </h3>

        {/* Subtitle + Role */}
        <div className="flex justify-between items-center">
          <p className="font-body text-base sm:text-lg text-[#3f3a3a]">{subtitle}</p>
          <p className="font-heading text-[#0D0D0D] text-base sm:text-lg font-semibold">{role}</p>
        </div>

        {/* Tech Stack or Tools */}
        {stack ? (
          <div className="mt-3 space-y-3">
            {stack.frontend?.length > 0 && (
              <div className="flex items-center gap-2">
                <p className="font-bold text-[#4e1f2f]">FE</p>
                <div className="flex flex-wrap gap-1">
                  {stack.frontend.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-1.5 py-0.5
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

            {(stack.backend?.length > 0 || stack.database?.length > 0) && (
              <div className="flex items-center gap-2">
                <p className="font-bold text-[#4e1f2f]">BE</p>
                <div className="flex flex-wrap gap-1">
                  {[...(stack.backend || []), ...(stack.database || [])].map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-1.5 py-0.5
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
        <p className="text-base sm:text-lg text-[#3f3a3a] mt-2 font-body flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}