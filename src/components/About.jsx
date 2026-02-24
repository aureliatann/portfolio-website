import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="px-4 lg:px-10 py-12">
      <div className="mx-auto flex flex-col space-y-6">

        {/* Row 1: Right-aligned intro paragraph */}
        <div className="flex w-full justify-end">
          <p className="text-[#0D0D0D] font-body leading-relaxed text-lg sm:text-xl max-w-4xl indent-20 text-justify">
            Hello! 👋🏻 I'm currently a final-year Computer Science student at The University of Melbourne, aspiring to be a{' '}
            {' '}<span className="font-heading uppercase text-xl sm:text-3xl">
              full-stack developer
            </span>
            . I thrive at the intersection of design and development, driven by a passion for creating applications that enhance user experiences.
          </p>
        </div>

        {/* Row 2: Left-aligned hero text */}
        <div className="flex w-full justify-start flex-col space-y-2">
          <h2 className="text-[4rem] sm:text-[8rem] font-heading tracking-wider font-bold text-[#0D0D0D] leading-[0.95] transform scale-y-135">
            AURELIA TAN
          </h2>

        {/* Resume + Social links */}
          <div className="flex justify-center sm:justify-start items-center gap-4 mt-4 text-4xl">
            {/* Resume button */}
            <a
              href="/pdfs/Aurelia Tan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4e1f2f] text-white px-8 py-2 rounded-2xl font-medium text-base sm:text-lg hover:bg-[#50171a] transition-colors duration-200"
            >
              Resume
            </a>

            {/* Social icons */}
            <a
              href="https://www.linkedin.com/in/aurelia-tan-32a504329"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4e1f2f] transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/aureliatann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4e1f2f] transition-colors duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:aureliatan7@gmail.com"
              className="text-[#4e1f2f] transition-colors duration-200"
            >
              <FaEnvelope />
            </a>
          </div>
          </div>

      </div>
    </section>
  );
}