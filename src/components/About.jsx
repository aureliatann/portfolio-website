import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="px-2 lg:px-0 py-12 space-y-10">
      {/* Flex container: column on mobile, row on small screens and up */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-10">

        {/* Profile Image */}
        <div className="w-80 h-80 sm:w-80 sm:h-80 lg:w-100 lg:h-100 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/images/profile.jpg"
            alt="Aurelia Tan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro text */}
        <div className="space-y-5 text-center sm:text-left">
          <p className="text-gray-600 text-lg">Hello, I'm</p>
          <h2 className="text-6xl sm:text-7xl font-bold text-gray-900">
            Aurelia Tan
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg sm:text-xl mt-2">
            I'm currently a final-year Computer Science student at The University of Melbourne, aspiring to be a{' '}
            <strong>full-stack developer</strong> with a strong passion for enhancing{' '}
            <strong>user experiences</strong>.
          </p>

          {/* Resume + Social links */}
          <div className="flex justify-center sm:justify-start items-center gap-4 mt-4 text-4xl">
            {/* Resume button */}
            <a
              href="/pdfs/Aurelia Tan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6b1f24] text-white px-8 py-2 rounded-2xl font-medium text-base sm:text-lg hover:bg-[#50171a] transition-colors duration-200"
            >
              Resume
            </a>

            {/* Social icons */}
            <a
              href="https://www.linkedin.com/in/aurelia-tan-32a504329"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-600 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/aureliatann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-600 transition-colors duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:aureliatan7@gmail.com"
              className="text-gray-500 hover:text-gray-600 transition-colors duration-200"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}