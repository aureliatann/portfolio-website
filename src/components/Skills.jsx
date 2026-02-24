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
  Mongoose: "devicon-mongoose-original"
};
export default function Skills() {
  const skillsWithLogos = {
    Languages: ["Python", "JavaScript", "Java", "C", "HTML", "CSS", "SQL"],
    Frameworks: ["Django", "React", "Tailwind CSS", "Node.js", "Express.js"],
    Databases: ["MySQL", "SQLite", "MongoDB", "Mongoose"],
    Tools: ["Git", "VS Code", "IntelliJ", "MATLAB", "R Studio", "Figma", "Unity", "Jupyter"],
  };

  const SkillCard = ({ title, items }) => (
    <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 w-full">
      <h3 className="font-semibold text-2xl text-[#4e1f2f] mb-4 text-center">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {items.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-2 px-4 py-2 rounded-xl 
                       bg-[#f2e8e9] text-[#4e1f2f] text-sm sm:text-base 
                       font-medium shadow-sm border border-[#e5dcdc]"
          >
            {skillIcons[skill] && <i className={`${skillIcons[skill]} text-lg`} />}
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-12 space-y-12">
      <h2 className="text-[#4e1f2f] font-heading font-extrabold tracking-wider text-center text-5xl sm:text-6xl drop-shadow-lg">
        Technical Skills
      </h2>

      {/* Top: responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SkillCard title="Languages" items={skillsWithLogos.Languages} />
        <SkillCard title="Frameworks" items={skillsWithLogos.Frameworks} />
        <SkillCard title="Databases" items={skillsWithLogos.Databases} />
      </div>

      {/* Bottom: developer tools always full width */}
      <div className="grid grid-cols-1">
        <SkillCard title="Developer Tools" items={skillsWithLogos.Tools} />
      </div>
    </section>
  );
}