import { useRef } from "react";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-6 lg:px-2 lg:py-6 space-y-6">
      <h2 className="text-center text-3xl font-bold text-gray-900">Projects</h2>
      <p className="text-center text-gray-600 leading-relaxed">
        Here’s a showcase of my personal projects in web development, game design, and data analysis.
      </p>

      {/* ---------------- Project 1: Event Registration Portal ---------------- */}
      <ProjectWithVideo
        title="Event Registration Portal"
        subtitle="Website for The Forum 2026, Organized by MUISA"
        description="Developed and deployed a Django portal to streamline event registration and ticketing via automated emails."
        role="Full-Stack Developer"
        tools={["Django", "Python", "JavaScript", "HTML/CSS"]}
        thumb="/images/theforum-thumb.png"
        video="" // leave empty if no video yet
      />

      {/* ---------------- Project 2: Personal Portfolio ---------------- */}
      <ProjectWithVideo
        title="Personal Portfolio"
        subtitle="Website"
        description="Developed an interactive portfolio website with React to display personal expertise."
        role="Front-End Developer"
        tools={["React", "Tailwind CSS", "JavaScript", "HTML/CSS"]}
        thumb="/images/portfolio-thumb.png"
        video="" // leave empty if no video yet
      />

      {/* ---------------- Project 3: Overgrown ---------------- */}
      <ProjectWithVideo
        title="Overgrown"
        subtitle="2D RPG Game for CISSAxGMC Game Jam 2025"
        description="Designed art and UI assets and developed level layouts in Unity by managing prefabs and scene architecture."
        role="Designer"
        tools={["Unity"]}
        thumb="/images/overgrown-thumb.jpg"
        video="/videos/overgrown.mp4"
      />

      {/* ---------------- Project 4: Shadow Donkey Kong ---------------- */}
      <ProjectWithVideo
        title="Shadow Donkey Kong"
        subtitle="2D Platformer Game"
        description="Applied OOP in Java to develop a platformer with responsive player controls, game mechanics, and gravity physics."
        role="Programmer"
        tools={["Java"]}
        thumb="/images/donkeykong-thumb.png"
        video="/videos/donkeykong.mp4"
      />

      {/* ---------------- Project 5: Language of Deception ---------------- */}
      <ProjectWithVideo
        title="Language of Deception"
        subtitle="Data Essay on a Kaggle Dataset"
        description="Analyzed public datasets with Python, conducting text analysis and interpreting results through a social science lens."
        role="Author and Programmer"
        tools={["Python", "Pandas", "Seaborn", "NLTK", "Quatro", "Jupyter"]}
        thumb="/images/dataessay-thumb.png"
        video="/videos/dataessay.mp4"
      />
    </section>
  );
}

// Reusable hover-video project component
function ProjectWithVideo({ title, subtitle, description, role, tools, thumb, video }) {
  const videoRef = useRef(null);

  return (
    <div
      className="p-6 border border-gray-200 rounded-xl text-gray-700 group cursor-pointer"
      onMouseEnter={() => videoRef.current && videoRef.current.play()}
      onMouseLeave={() => videoRef.current && videoRef.current.pause()}
    >
      <div className="flex flex-col sm:flex-row sm:gap-6">
        {/* Video + Thumbnail */}
        <div className="w-full sm:w-2/5 h-70 sm:h-48 rounded-lg overflow-hidden flex-shrink-0 relative">
          <img src={thumb} alt={`${title} thumbnail`} className="w-full h-full object-cover" />
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
        <div className="flex-1 mt-4 sm:mt-0 space-y-2">
          {/* Title, Subtitle, Role stacked */}
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
            <p className="text-sm text-gray-800 font-medium mt-1">{role}</p>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tools.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}