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
  React: "devicon-react-original",
  "Tailwind CSS": "devicon-tailwindcss-plain",
  Git: "devicon-git-plain",
  "VS Code": "devicon-vscode-plain",
  IntelliJ: "devicon-intellij-plain",
  MySQL: "devicon-mysql-plain",
  MATLAB: "matlab-original",
  "R Studio": "devicon-rstudio-plain",
  Figma: "devicon-figma-plain",
  Unity: "devicon-unity-plain colored",
  Jupyter: "devicon-jupyter-plain",
};

export default function Skills() {
  const skillsWithLogos = {
    Languages: ["Python", "JavaScript", "Java", "C", "HTML", "CSS", "SQL"],
    Frameworks: ["Django", "React", "Tailwind CSS"],
    Tools: ["Git", "VS Code", "IntelliJ", "MySQL", "MATLAB", "R Studio", "Figma", "Unity", "Jupyter"],
  };

  return (
    <section id="skills" className="py-12 space-y-10">
    {/* Heading */}
    <h2 className="text-[#3a000c] font-heading font-extrabold tracking-wider leading-tight drop-shadow-lg text-center text-5xl sm:text-6xl font-bold">
      Technical Skills
    </h2>
    <p className="text-center text-lg sm:text-xl text-gray-600 leading-relaxed">
      I'm constantly exploring the tools and technologies that drive modern development. Through various projects, I've gained practical experience with several of them, including:
    </p>

      {/* Languages */}
      <div className="text-center space-y-3">
        <h3 className="font-semibold text-2xl text-gray-800 mb-2">Languages</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsWithLogos.Languages.map((skill) => (
            <span
              key={skill}
              className="bg-white flex items-center gap-2 px-5 py-2.5 rounded-xl text-[#3a000c] text-base sm:text-lg font-medium shadow-xl"

            >
              <i className={`${skillIcons[skill]} text-xl`} /> {/* Devicon icon */}
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className="text-center space-y-3">
        <h3 className="font-semibold text-2xl text-gray-800 mb-2">Frameworks</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsWithLogos.Frameworks.map((skill) => (
            <span
              key={skill}
              className="bg-white flex items-center gap-2 px-5 py-2.5 rounded-xl text-[#3a000c] text-base sm:text-lg font-medium shadow-xl"

            >
              <i className={`${skillIcons[skill]} text-xl`} /> {/* Devicon icon */}
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="text-center space-y-3">
        <h3 className="font-semibold text-2xl text-gray-800 mb-2">Technical Tools</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsWithLogos.Tools.map((skill) => (
            <span
              key={skill}
              className="bg-white flex items-center gap-2 px-5 py-2.5 rounded-xl text-[#3a000c] text-base sm:text-lg font-medium shadow-xl"

            >
              <i className={`${skillIcons[skill]} text-xl`} /> {/* Devicon icon */}
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}