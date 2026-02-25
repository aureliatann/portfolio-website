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
  MATLAB: "devicon-matlab-plain",
  "R Studio": "devicon-rstudio-plain",
  Figma: "devicon-figma-plain",
  Unity: "devicon-unity-plain",
  Jupyter: "devicon-jupyter-plain",
  "Node.js": "devicon-nodejs-plain",
  "Express.js": "devicon-express-original",
  MongoDB: "devicon-mongodb-plain",
  Mongoose: "devicon-mongoose-original",
};
export default function Skills() {
  const skillsWithLogos = {
    Languages: ["Python", "JavaScript", "Java", "C", "HTML", "CSS", "SQL"],
    Frameworks: ["Django", "React", "Tailwind CSS", "Node.js", "Express.js"],
    Databases: ["MySQL", "SQLite", "MongoDB", "Mongoose"],
    Tools: ["Git", "VS Code", "IntelliJ", "MATLAB", "R Studio", "Figma", "Unity", "Jupyter"],
  };

  // --- CARD COMPONENT ---
  const SkillCard = ({ items }) => (
    <div
      className="
        w-[280px] h-[250px]
        bg-white/80 backdrop-blur-md 
        rounded-2xl shadow-xl border border-gray-200 p-3
        flex
      "
    >
      <div className="m-auto flex flex-wrap justify-center items-center gap-4 text-center">
        {items.map((skill) => (
          <span
            key={skill}
            className="
              flex items-center gap-2 px-4 py-2 
              rounded-xl bg-[#f2e8e9] text-[#4e1f2f]
              text-sm sm:text-base font-medium shadow-sm
              border border-[#e5dcdc]
            "
          >
            <i className={`${skillIcons[skill]} text-lg`} />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="px-4 lg:px-10 py-12">
      <div className="flex gap-8 items-start max-w-[1200px]">
        
        {/* 1 — LANGUAGES */}
        <div className="flex flex-col">
          <h3 className="font-body text-xl text-[#0D0D0D] mb-1">[01] Languages</h3>
          <SkillCard items={skillsWithLogos.Languages} />
        </div>

        {/* 2 — FRAMEWORKS */}
        <div className="flex flex-col">
          <h3 className="font-body text-xl text-[#0D0D0D] mb-1">[02] Frameworks</h3>
          <SkillCard items={skillsWithLogos.Frameworks} />
        </div>

        {/* 3 — DATABASES */}
        <div className="flex flex-col">
          <h3 className="font-body text-xl text-[#0D0D0D] mb-1">[03] Databases</h3>
          <SkillCard items={skillsWithLogos.Databases} />
        </div>

        {/* 4 — TOOLS */}
        <div className="flex flex-col">
          <h3 className="font-body text-xl text-[#0D0D0D] mb-1">[04] Developer Tools</h3>
          <SkillCard items={skillsWithLogos.Tools} />
        </div>
      </div>
    </section>
  );
}