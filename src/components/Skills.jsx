export default function Skills() {
  return (
    <section id="skills" className="p-8 space-y-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
      <p className="text-gray-600 leading-relaxed">
        I’m constantly exploring the tools and technologies that drive modern development. Here are a few I’ve worked with:
        </p>

      {/* Languages */}
      {/* Loop through an array and generate badges */}
      {/* NOTE: TO INSERT JAVASCRIPT INSIDE REACT -> use {} 
          .map() takes each item (this case, skill element) in array and creates one <span> for each element */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Languages</h3>
        <div className="flex flex-wrap gap-3">
          {["Python", "JavaScript", "Java", "C", "HTML/CSS", "SQL"].map((skill) => (
            <span
              key={skill} // key is essentially the label OR a unique ID for that list item 
              // px-4 → horizontal padding 
              // py-2 → vertical padding
              // bg-gray-100 → light gray background
              // rounded-lg → rounded edges
              // text-sm → smaller text
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Frameworks</h3>
        <div className="flex flex-wrap gap-3">
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
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Technical Tools</h3>
        <div className="flex flex-wrap gap-3">
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