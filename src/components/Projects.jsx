export default function Projects() {
  return (
    <section id="projects" className="px-4 py-6 lg:px-6 lg:py-6 space-y-6">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-gray-900">Projects</h2>
      <p className="text-center text-gray-600 leading-relaxed">
        Here’s a showcase of my personal projects in web development, game design, and data analysis. Each project highlights the tools I've used and the skills I've developed along the way.
      </p>

      {/* Project 1: Event Registration Portal */}
      <div className="p-6 border border-gray-200 rounded-xl text-gray-700">
        <div className="flex flex-col sm:flex-row sm:gap-6">
          {/* Placeholder */}
          <div className="w-full sm:w-1/3 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-0">
            <span className="text-gray-400">Video/Image Placeholder</span>
          </div>

          {/* Project info */}
          <div className="flex-1 space-y-3">
            {/* Name & Role */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-semibold text-lg">Event Registration Portal</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Website for The Forum 2026, Organized by MUISA
                </p>
              </div>
              <p className="text-sm text-gray-800 font-medium">Full-Stack Developer</p>
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

            {/* Description */}
            <p className="text-gray-600 mt-2">
              Developed and deployed a Django portal to streamline event registration and ticketing via automated emails.
            </p>
          </div>
        </div>
      </div>

      {/* Project 2: Personal Portfolio */}
      <div className="p-6 border border-gray-200 rounded-xl text-gray-700">
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div className="w-full sm:w-1/3 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-0">
            <span className="text-gray-400">Video/Image Placeholder</span>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-semibold text-lg">Personal Portfolio</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Website
                </p>
              </div>
              <p className="text-sm text-gray-800 font-medium">Front-End Developer</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["React", "Tailwind CSS", "JavaScript", "HTML/CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mt-2">
              Developed an interactive portfolio website with React to display personal expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Project 3: Overgrown */}
      <div className="p-6 border border-gray-200 rounded-xl text-gray-700">
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div className="w-full sm:w-1/3 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-0">
            <span className="text-gray-400">Video/Image Placeholder</span>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-semibold text-lg">Overgrown</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  2D RPG Game for CISSAxGMC Game Jam 2025
                </p>
              </div>
              <p className="text-sm text-gray-800 font-medium">Designer</p>
            </div>
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
            <p className="text-gray-600 mt-2">
              Designed art and UI assets and developed level layouts in Unity by managing prefabs and scene architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Project 4: Shadow Donkey Kong */}
      <div className="p-6 border border-gray-200 rounded-xl text-gray-700">
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div className="w-full sm:w-1/3 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-0">
            <span className="text-gray-400">Video/Image Placeholder</span>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-semibold text-lg">Shadow Donkey Kong</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  2D Platformer Game
                </p>
              </div>
              <p className="text-sm text-gray-800 font-medium">Programmer</p>
            </div>
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
            <p className="text-gray-600 mt-2">
              Applied OOP in Java to develop a platformer with responsive player controls, game mechanics, and gravity physics.
            </p>
          </div>
        </div>
      </div>

      {/* Project 5: Language of Deception */}
      <div className="p-6 border border-gray-200 rounded-xl text-gray-700">
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div className="w-full sm:w-1/3 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-0">
            <span className="text-gray-400">Video/Image Placeholder</span>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-semibold text-lg">Language of Deception</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Data Essay on a Kaggle Dataset
                </p>
              </div>
              <p className="text-sm text-gray-800 font-medium">Author and Programmer</p>
            </div>
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
            <p className="text-gray-600 mt-2">
              Analyzed public datasets with Python, conducting text analysis and interpreting results through a social science lens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}