import { useRef } from "react";

// -------------------- DEVICON MAP --------------------
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
  Mongoose: "devicon-mongoose-original",
};

// -------------------- PROJECT DATA --------------------
// Array of project objects containing all the info to render each project
const projects = [
  {
    title: "The Forum 2026",
    subtitle: "Event Registration Website",
    description:
      "Developed and deployed a Django portal to streamline event registration and ticketing via automated emails.",
    role: "Full-Stack Developer",
    // NOTE: Project has either "stack" (if full-stack project), or "tools" if normal project
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Python", "Django", "SQLite"],
    },
    thumb: "/images/theforum-thumb.png",
    video: "",
  },
  {
    title: "AT",
    subtitle: "Portfolio Website",
    description:
      "Developed an interactive portfolio website using the MERN stack, including a backend API for handling contact form submissions.",
    role: "Full-Stack Developer",
    stack: {
      frontend: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    },
    thumb: "/images/portfolio-thumb.png",
    video: "/videos/portfolio.mp4",
  },
  {
    title: "MUISA Website",
    subtitle: "Organization Website",
    description:
      "Designed and updated MUISA's public-facing website according to the organization's needs to enhance digital presence.",
    role: "Designer",
    tools: [],
    thumb: "/images/ppiawebsite-thumb.png",
    video: "/videos/ppiawebsite.mp4",
  },
  {
    title: "Overgrown",
    subtitle: "2D RPG Game",
    description:
      "Designed art and UI assets and developed level layouts in Unity by managing prefabs and scene architecture.",
    role: "Designer",
    tools: ["Unity"],
    thumb: "/images/overgrown-thumb.jpg",
    video: "/videos/overgrown.mp4",
  },
  {
    title: "Donkey Kong Clone",
    subtitle: "2D Platformer Game",
    description:
      "Applied OOP in Java to develop a platformer with responsive player controls, game mechanics, and gravity physics.",
    role: "Programmer",
    tools: ["Java"],
    thumb: "/images/donkeykong-thumb.png",
    video: "/videos/donkeykong.mp4",
  },
  {
    title: "Language of Deception",
    subtitle: "Data Essay",
    description:
      "Analyzed Kaggle datasets with Python, conducting text analysis and interpreting results through a social science lens.",
    role: "Author/Programmer",
    tools: ["Python", "Pandas", "Seaborn", "NLTK", "Jupyter"],
    thumb: "/images/dataessay-thumb.png",
    video: "/videos/dataessay.mp4",
  },
];

// -------------------- PROJECT CARD --------------------
function ProjectCard({title, subtitle, description, role, tools, stack, thumb, video,
}) {
  // Ref to control video playback on hover
  // NOTE: useRef creates a "reference" to a DOM element (here, the <video> tag) so we can control it programmatically
  const videoRef = useRef(null);

  return (
    <div
      className="
        flex flex-col h-full rounded-xl
        bg-white/80 backdrop-blur-md border border-gray-200
        text-[#3f3a3a] group cursor-pointer
        transition-transform hover:scale-105 duration-300
        overflow-hidden shadow-xl hover:shadow-2xl
      "
      // Play video on hover (Cursor/mouse enters)
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0; // Reset video to the start time
          videoRef.current.play();          // Start playing the video
        }
      }}
      // Pause video when hover ends (Cursor/mouse leaves)
      onMouseLeave={() => {
        if (videoRef.current) videoRef.current.pause();
      }}
    >
      {/* PROJECT THUMBNAIL */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-t-xl">
        {/* NOTE: 
            - relative -> ensures children are position relative to this div, not whole page
            - rounded-t -> shorthand for rounded top corners only */}
        {/* IMAGE (Static, default thumbnail) */}
        <img
          src={thumb}
          alt={`${subtitle} thumbnail`}
          className="w-full h-full object-cover object-top"
        />
        {/* NOTE:
            - object-cover -> image fills container completely while keep its aspect ratio (crops excesses)
            - object-top -> object position, controls which part is cropped (this case, top always shows)" */}
        {/* VIDEO (Overlays image on hover) */}
        {video && (
          <video
            ref={videoRef}   // Attach the ref so we can control it in JS
            src={video}
            muted
            loop             // Video repeats indefinitely
            playsInline      // Prevent full-screen autoplay on iOS
            className="
              absolute inset-0 w-full h-full object-cover object-top
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
            "
          />
          /* NOTE:
             - absolute -> element is posiitoned relative to nearest parent with relative positioning (or whole page if none)
             - inset-0 -> shortcut for top:0, right:0, bottom:0, left:0 (makes an absolutely positioned element strecth to all edges of parent container)
             - opacity-0 -> video initially invisible, opacity-100 on hover (when parent group is hovered) */
        )}
      </div>

      {/* PROJECT CARD BODY (TEXT) */}
      <div className="p-6 space-y-3 flex flex-col flex-grow">
        {/* TITLE */}
        <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-[#0D0D0D] mb-2">
          {title}
        </h3>

        {/* SUBTITLE AND ROLE (Side-by-side)*/}
        <div className="flex justify-between items-center w-full gap-2">
          <p className="font-body text-sm sm:text-base md:text-lg text-[#3f3a3a] mt-1">
            {subtitle}
          </p>
          <p className="font-heading text-[#0D0D0D] text-right font-semibold text-sm sm:text-base md:text-lg">
            {role}
          </p>
        </div>

        {/* TECH STACK */}
        {stack ? (
          // If a `stack` object exists, render frontend/backend tech stack
          <div className="mt-3 space-y-3">
            {/* FRONTEND STACK */}
            {stack.frontend?.length > 0 && (
              <div className="flex items-center gap-2"> {/* Flex container for horizontal layout of tech label (FE/BE) and badges */}
                
                {/* Label for frontend stack */}
                <p className="font-bold text-[#4e1f2f] text-sm sm:text-base">FE</p>
                
                {/* Frontend tech badges */}
                <div className="flex flex-wrap gap-1">
                  {stack.frontend.map((tech) => (
                    <span
                      key={tech}
                      className="
                        flex items-center gap-1.5 px-1.5 py-0.5
                        bg-[#f2e8e9] rounded-xl text-[#4e1f2f]
                        text-[0.65rem] sm:text-xs md:text-sm
                        border border-[#e5dcdc]
                      "
                    >
                      {skillIcons[tech] && <i className={`${skillIcons[tech]} text-xs`} />}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* BACKEND STACK */}
            {stack.backend?.length > 0 && (
              <div className="flex items-center gap-2"> {/* Flex container for horizontal layout of tech label (BE) and badges */}

                {/* Label for backend stack */}
                <p className="font-bold text-[#4e1f2f] text-sm sm:text-base">BE</p>

                {/* Backend tech badges */}
                <div className="flex flex-wrap gap-1">
                  {stack.backend.map((tech) => (
                    <span
                      key={tech}
                      className="
                        flex items-center gap-1.5 px-1.5 py-0.5
                        bg-[#f2e8e9] rounded-xl text-[#4e1f2f]
                        text-[0.65rem] sm:text-xs md:text-sm
                        border border-[#e5dcdc]
                      "
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
          // If `stack` is not provided, fallback to `tools` array
          tools?.length > 0 && (
            <div className="flex flex-wrap justify-start gap-3 mt-3">
              {tools.map((tech) => (
                <span
                  key={tech}
                  className="
                    flex items-center gap-1.5 px-1.5 py-0.5
                    bg-[#f2e8e9] rounded-xl text-[#4e1f2f]
                    text-[0.65rem] sm:text-xs md:text-sm
                    border border-[#e5dcdc]
                  "
                >
                  {skillIcons[tech] && <i className={`${skillIcons[tech]} text-xs`} />}
                  {tech}
                </span>
              ))}
            </div>
          )
        )}

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-base md:text-lg text-[#3f3a3a] mt-2 font-body flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}

// -------------------- PROJECTS --------------------
export default function Projects() {
  return (
    // SECTION WRAPPER
    <section id="projects" className="w-full py-12 px-4 lg:px-10">

      {/* HEADINGS */}
      <h2 className="font-body tracking-wider font-bold text-[#0D0D0D] text-sm sm:text-base text-center">
        ['24 - PORTFOLIO - '26]
      </h2>
      <h2 className="font-body tracking-wider font-bold text-[#0D0D0D] text-4xl sm:text-5xl lg:text-6xl text-center mt-2">
        (FEATURED PROJECTS)
      </h2>

      {/* PROJECT CARDS (Responsive grid layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {projects.map((proj, idx) => (
          <div key={proj.title} className="flex flex-col group h-full"> {/* Container for each project card in grid (Label and card itself) */}
            {/* Inner wrapper for card content */}
            <div className="flex flex-col h-full transform transition-transform duration-300 hover:scale-105">

              {/* PROJECT INDEX (Number) */}
              <h4 className="font-body text-lg sm:text-xl text-[#0D0D0D] mb-1">
                [{String(idx + 1).padStart(2, "0")}]
                {/* Converts index to 2-digit string, e.g., 1 → 01 */}
              </h4>

              {/* Renders the project card */}
              <ProjectCard {...proj} />
              {/* NOTE: Spread operator (...) -> passes all properties of the project object 
                (title, subtitle, description, role, tools, stack, thumb, video) as props to the ProjectCard component */}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}