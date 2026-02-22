export default function Skills() {
  return (
    <section id="skills" className="text-center px-4 py-6 lg:px-6 lg:py-6 space-y-6">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-gray-900">Skills</h2>
      <p className="text-center text-gray-600 leading-relaxed">
        I'm constantly exploring the tools and technologies that drive modern development. Through various projects, I've gained practical experience with several of them, including:
      </p>

    {/* Languages */}
    <div className="text-center">
      <h3 className="font-semibold text-gray-800 mb-2">Languages</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {["Python", "JavaScript", "Java", "C", "HTML/CSS", "SQL"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Frameworks */}
    <div className="text-center">
      <h3 className="font-semibold text-gray-800 mb-2">Frameworks</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {["Django", "React", "Node.js", "Tailwind CSS"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Tools */}
    <div className="text-center">
      <h3 className="font-semibold text-gray-800 mb-2">Technical Tools</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {["Git", "VS Code", "IntelliJ", "MySQL", "Figma", "Unity", "Jupyter"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </section>
  );
}