// -------------------- DEVICON MAP --------------------
// Map each skill name to its corresponding Devicon CSS class for rendering icons
const skillIcons = {
  Python:        "devicon-python-plain",
  JavaScript:    "devicon-javascript-plain",
  Java:          "devicon-java-plain",
  C:             "devicon-c-plain",
  HTML:          "devicon-html5-plain",
  CSS:           "devicon-css3-plain",
  SQL:           "devicon-mysql-plain",
  Django:        "devicon-django-plain",
  SQLite:        "devicon-sqlite-plain",
  React:         "devicon-react-original",
  "Tailwind CSS":"devicon-tailwindcss-plain",
  Git:           "devicon-git-plain",
  "VS Code":     "devicon-vscode-plain",
  IntelliJ:      "devicon-intellij-plain",
  MySQL:         "devicon-mysql-plain",
  MATLAB:        "devicon-matlab-plain",
  "R Studio":    "devicon-rstudio-plain",
  Figma:         "devicon-figma-plain",
  Unity:         "devicon-unity-plain",
  Jupyter:       "devicon-jupyter-plain",
  "Node.js":     "devicon-nodejs-plain",
  "Express.js":  "devicon-express-original",
  MongoDB:       "devicon-mongodb-plain",
  Mongoose:      "devicon-mongoose-original",
};

// -------------------- SKILL CATEGORIES --------------------
// Group skills into categories for display in separate cards
const skillBadges = {
  Languages:  ["Python", "JavaScript", "Java", "C", "HTML", "CSS", "SQL"],
  Frameworks: ["Django", "React", "Tailwind CSS", "Node.js", "Express.js"],
  Databases:  ["MySQL", "SQLite", "MongoDB", "Mongoose"],
  Tools:      ["Git", "VS Code", "IntelliJ", "MATLAB", "R Studio", "Figma", "Unity", "Jupyter"],
};

// -------------------- SKILL CARD --------------------
// Component to render a SINGLE card containing multiple skills with icons (Essentially how a single skill card is displayed)
function SkillCard({ items }) { // NOTE: items is an argument to the function SkillCard (React calls arguments properties / props)
  return (
    // CARD CONTAINER (Handles card styling itself)
    <div
      className="
        w-full h-full min-h-[180px]
        bg-white/80 backdrop-blur-md
        rounded-2xl shadow-xl border border-gray-200 p-4
        flex
      "
    >
      {/* INNER CONTAINER (Handles inner layout of skill badges) */}
      <div className="m-auto flex flex-wrap justify-center items-center gap-3 text-center">
        {/* SKILL BADGES */}
        {/* Maps over array to render each skill as skill badges */}
        {items.map((skill) => (
          <span
            key={skill}
            className="
              flex items-center gap-2 px-3 py-1.5
              rounded-xl bg-[#f2e8e9] text-[#4e1f2f]
              text-xs sm:text-sm md:text-base
              font-medium shadow-sm border border-[#e5dcdc]
            "
          >
            {/* This renders the skill icons (using the Devicon map) */}
            <i className={`${skillIcons[skill]} text-sm sm:text-base md:text-lg`} />
            {/* This renders the skill name */}
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// -------------------- SKILLS --------------------
// Component to render ALL skill cards (Displays all 4 skill categories)
export default function Skills() {
  // Define the categories array (Labels for display and its unique key)
  const categories = [
    { label: "[01] Languages",       key: "Languages"  },
    { label: "[02] Frameworks",      key: "Frameworks" },
    { label: "[03] Databases",       key: "Databases"  },
    { label: "[04] Developer Tools", key: "Tools"      },
  ];

  return (
    // SECTION WRAPPER
    <section id="skills" className="px-4 lg:px-10 py-12">
      {/* SKILL CARDS (Responsive grid layout) */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-[1200px]">
        {categories.map(({ label, key }) => (
          <div key={key} className="flex flex-col"> {/* Flex column to vertically stack the label and skill card */}
            {/* Category heading */}
            <h3 className="font-body text-sm sm:text-lg md:text-xl text-[#0D0D0D] mb-2">
              {label}
            </h3>
            {/* Rendering skill card itseld */}
            <SkillCard items={skillBadges[key]} />
            {/* 
              - `skillBadges[key]` retrieves the array of skills for this category 
                e.g., skillBadges["Languages"] → ["Python", "JavaScript", "Java", ...]
              - The SkillCard component handles rendering the card, the badges, and icons.
            */}
          </div>
        ))}
      </div>
    </section>
  );
}