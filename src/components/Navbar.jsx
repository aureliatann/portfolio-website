import { useState, useEffect } from "react";

/* REACT COMPONENT: Navbar with active section highlight
    export default function Navbar() {
        return <nav>...</nav>;
    }
    - export default: makes component available to other files
    - function Navbar(): creates a JS function named Navbar (in React, function = component)
    - return ...: JSX NOT HTML, React takes JSX (HTML inside JS) and turns it into HTML in the browser
                  return must return ONE thing (so wrap everything in one parent element)
*/

// -------------------- NAVBAR --------------------
export default function Navbar() {
  const [active, setActive] = useState("about");

  // Highlight nav link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects"];
      let current = "about";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 80) current = section; // 80px offset for navbar height
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="w-full top-0 z-50">
      <div className="flex items-center justify-between px-6 sm:px-8 py-4">

        {/* Logo */}
        <h1 className="text-[#4e1f2f] scale-y-135 font-heading tracking-wider font-bold text-[2.5rem] sm:text-[2.8rem]">
          AT
        </h1>

        {/* Navigation links */}
        <ul className="text-[#4e1f2f] font-heading tracking-wider font-bold flex gap-8 sm:gap-10 md:gap-12 lg:gap-15 text-[1.1rem] sm:text-[1.25rem] font-medium">
          {["about", "projects", "contact"].map((section) => (
            <li key={section} className="relative">
              <button
                onClick={() => scrollToSection(section)}
                className={`
                  inline-block relative transition-transform duration-300 transform
                  ${active === section
                    ? "text-[#6a1e28] scale-125 -translate-y-1"
                    : "text-[#4e1f2f] hover:text-[#4B1A1A] hover:scale-105"
                  }
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#4B1A1A]
                  after:transition-all after:duration-300
                  ${active === section ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}