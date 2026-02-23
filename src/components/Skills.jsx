export default function Skills() {
  return (
    <section id="skills" className="px-2 lg:px-0 py-12 space-y-10">
      {/* Heading */}
      <h2 className="text-center text-4xl sm:text-5xl font-bold text-gray-900">
        SKILLS
      </h2>
      <p className="text-center text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
        I'm constantly exploring the tools and technologies that drive modern development. Through various projects, I've gained practical experience with several of them, including:
      </p>

      {/* Languages */}
      <div className="text-center space-y-3">
        <h3 className="font-semibold text-2xl text-gray-800 mb-2">Languages</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Python", "JavaScript", "Java", "C", "HTML/CSS", "SQL"].map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 bg-gray-100 rounded-lg text-gray-700 text-base sm:text-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className="text-center space-y-3">
        <h3 className="font-semibold text-2xl text-gray-800 mb-2">Frameworks</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Django", "React", "Node.js", "Tailwind CSS"].map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 bg-gray-100 rounded-lg text-gray-700 text-base sm:text-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="text-center space-y-3">
        <h3 className="font-semibold text-2xl text-gray-800 mb-2">Technical Tools</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Git", "VS Code", "IntelliJ", "MySQL", "Figma", "Unity", "Jupyter"].map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 bg-gray-100 rounded-lg text-gray-700 text-base sm:text-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}