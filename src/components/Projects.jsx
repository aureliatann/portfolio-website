export default function Projects() {
  return (
    <section id="projects" className="p-8 space-y-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900">Projects</h2>

      {/* Project 1: Event Registration Portal */}
      <div className="p-6 border border-gray-200 rounded-xl text-gray-700 space-y-3">
        {/* Project name and role */}
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-semibold text-lg">Event Registration Portal</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              Website for The Forum 2026, Organized by MUISA
            </p>
          </div>
          <p className="text-sm text-gray-800 font-medium">Developer</p>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {["Django", "Python", "JavaScript", "HTML/CSS"].map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project description */}
        <p className="text-gray-600 mt-2">
          Developed and deployed a Django portal to streamline event registration and ticketing via automated emails.
        </p>
      </div>

      {/* Project 2: Overgrown */}
      <div className="p-6 border border-gray-200 rounded-xl text-gray-700 space-y-3">
        {/* Project name and role */}
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-semibold text-lg">Overgrown</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              2D RPG Game for CISSAxGMC Game Jam 2025
            </p>
          </div>
          <p className="text-sm text-gray-800 font-medium">Designer</p>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {["Unity"].map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project description */}
        <p className="text-gray-600 mt-2">
          Designed art and UI assets and developed level layouts in Unity by managing prefabs and scene architecture.
        </p>
      </div>

      {/* Project 3: Shadow Donkey Kong */}
      <div className="p-6 border border-gray-200 rounded-xl text-gray-700 space-y-3">
        {/* Project name and role */}
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-semibold text-lg">Shadow Donkey Kong</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              2D Platformer Game
            </p>
          </div>
          <p className="text-sm text-gray-800 font-medium">Developer</p>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {["Java"].map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project description */}
        <p className="text-gray-600 mt-2">
          Applied OOP in Java to develop a platformer with responsive player controls, game mechanics, and gravity physics.
        </p>
      </div>

      {/* Project 4: Language of Deception */}
      <div className="p-6 border border-gray-200 rounded-xl text-gray-700 space-y-3">
        {/* Project name and role */}
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-semibold text-lg">Language of Deception</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              Data Essay on a Kaggle Dataset
            </p>
          </div>
          <p className="text-sm text-gray-800 font-medium">Author and Programmer</p>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {["Python", "Pandas", "Seaborn", "NLTK", "Quatro", "Jupyter"].map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project description */}
        <p className="text-gray-600 mt-2">
          Analyzed public datasets with Python, conducting text analysis and interpreting results through a social science lens.
        </p>
      </div>
    </section>
  );
}