import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" cclassName="px-4 py-6 lg:px-2 lg:py-6 space-y-6">

      {/* Flex container: column on mobile, row on small screens and up */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">

        {/* Profile Image */}
        <div className="w-64 h-64 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/images/profile.jpg"
            alt="Aurelia Tan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro text */}
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-gray-600">Hi! 👋</p>
          <h2 className="text-3xl font-bold text-gray-900">I'm Aurelia Tan</h2>

          <p className="text-gray-600 leading-relaxed mt-2">
            I'm currently a final-year Computer Science student at The University of Melbourne, aspiring to be a{' '}
            <strong>full-stack developer</strong> with a strong passion for enhancing{' '}
            <strong>user experiences</strong>.
          </p>

          {/* Social links with grey icons */}
          <div className="flex justify-center sm:justify-start gap-6 mt-2 text-2xl">
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