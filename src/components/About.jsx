import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="px-4 lg:px-10 py-6">
      <div className="mx-auto flex flex-col space-y-6">

        {/* Row 1: Right-aligned intro paragraph */}
        <div className="flex w-full justify-end">
          <p className="text-[#0D0D0D] font-body text-lg sm:text-xl max-w-5xl indent-20 leading-tight">
            Hello! 👋🏻 I'm currently a final-year Computer Science student at The University of Melbourne, aspiring to be a versatile{" "}
            <span className="font-heading uppercase text-xl sm:text-2xl leading-none align-baseline">
              full-stack developer
            </span>
            . I thrive at the intersection of design and development, driven by a passion for creating applications that enhance user experiences.
          </p>
        </div>

        {/* Row 2: Left-aligned hero text */}
        <div className="flex w-full justify-start flex-col space-y-4">
          <h2 className="text-[5rem] sm:text-[8rem] font-heading tracking-wider font-bold text-[#0D0D0D] leading-[0.95] transform scale-y-135">
            AURELIA TAN
          </h2>

          {/* Resume + Social links */}
          <div className="flex justify-center sm:justify-start items-center gap-4 mt-4 text-4xl">
            <a
              href="/pdfs/Aurelia Tan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#4e1f2f] text-white
                px-8 py-2 rounded-2xl
                font-medium text-base sm:text-lg
                shadow-lg
                transition transform duration-300 ease-in-out
                hover:bg-[#3b0f1b] hover:scale-105 hover:-translate-y-1 hover:shadow-xl
              "
            >
              Resume
            </a>

            {[{
              href: "https://www.linkedin.com/in/aurelia-tan-32a504329", icon: <FaLinkedin />
            },{
              href: "https://github.com/aureliatann", icon: <FaGithub />
            },{
              href: "mailto:aureliatan7@gmail.com", icon: <FaEnvelope />
            }].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="
                  text-[#4e1f2f]
                  transition transform duration-300 ease-in-out
                  hover:text-[#3b0f1b] hover:scale-105 hover:-translate-y-1
                  cursor-pointer
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}