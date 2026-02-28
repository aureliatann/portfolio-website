import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import FadeInStagger from "./FadeInStagger";

// -------------------- SOCIAL LINKS --------------------
const socialLinks = [
  { href: "https://www.linkedin.com/in/aurelia-tan-32a504329", icon: <FaLinkedin /> },
  { href: "https://github.com/aureliatann",                    icon: <FaGithub /> },
  { href: "mailto:aureliatan7@gmail.com",                      icon: <FaEnvelope /> },
];

// -------------------- ABOUT --------------------
export default function About() {
  return (
    <section id="about" className="px-4 lg:px-10 py-6">
      <FadeInStagger delay={150} duration={500}>

        {/* Row 1: Right-aligned intro paragraph */}
        <div className="flex w-full justify-center lg:justify-end">
          <p
            className="
              text-[#0D0D0D] font-body
              text-base sm:text-lg md:text-xl lg:text-xl
              max-w-5xl indent-20 leading-tight mb-3
              text-center xl:text-right
            "
          >
            Hello! 👋🏻 I'm currently a final-year Computer Science student at The University of Melbourne, aspiring to be a versatile{" "}
            <span className="font-heading uppercase text-xl sm:text-2xl leading-none align-baseline">
              full-stack developer
            </span>
            . I thrive at the intersection of design and development, driven by a passion for creating applications that enhance user experiences.
          </p>
        </div>

        {/* Row 2: Left-aligned hero text */}
        <div className="flex w-full justify-center lg:justify-start flex-col space-y-4">
          <h2
            className="
              font-heading tracking-wider font-bold text-[#0D0D0D] transform scale-y-135 leading-[0.95]
              text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem]
              text-center xl:text-left
            "
          >
            AURELIA TAN
          </h2>

          {/* Resume + Social links */}
          <div
            className="
              flex items-center gap-4 mt-4 text-3xl sm:text-4xl
              justify-center sm:justify-center xl:justify-start
            "
          >
            <a
              href="/pdfs/Aurelia Tan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#4e1f2f] text-white px-8 py-2 rounded-2xl font-medium
                text-sm sm:text-base md:text-lg
                shadow-lg transition transform duration-300 ease-in-out
                hover:bg-[#3b0f1b] hover:scale-105 hover:-translate-y-1 hover:shadow-xl
              "
            >
              Resume
            </a>

            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="
                  text-[#4e1f2f] transition transform duration-300 ease-in-out
                  hover:text-[#3b0f1b] hover:scale-105 hover:-translate-y-1 cursor-pointer
                  text-3xl sm:text-4xl
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

      </FadeInStagger>
    </section>
  );
}