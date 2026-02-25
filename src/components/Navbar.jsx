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

export default function Navbar() {
  const [active, setActive] = useState("about");

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

  return (
    /* w-full → full width
       bg-white → white background
       sticky top-0 → sticks to top
       z-50 → ensures navbar is on top
    */
    <nav className="bg-[#F5F1E6] w-full sticky top-0 z-50">
      {/* flex → place items in a row
          items-center → vertically center items
          justify-between → space between logo and links
          px-6 sm:px-8 → increased padding on sides
          py-4 → vertical padding
      */}
      <div className="flex items-center justify-between px-6 sm:px-8 py-4">
        <h1 className="text-[#4e1f2f] font-heading tracking-wider font-bold text-[2.5rem] sm:text-[2.8rem]">
          AT
        </h1>

        {/* Navigation links */}
        <ul className="text-[#4e1f2f] font-heading tracking-wider font-bold flex gap-8 sm:gap-10 md:gap-12 lg:gap-15 text-[1.1rem] sm:text-[1.25rem] font-medium">
          {["about", "skills", "projects"].map((section) => (
            <li key={section} className="relative">
              <a
                href={`#${section}`}
                className={`
                  inline-block relative transition-transform duration-300 transform
                  ${
                    active === section
                      ? "text-[#6a1e28] scale-125 -translate-y-1" // raises active tab slightly
                      : "text-[#4e1f2f] hover:text-[#4B1A1A] hover:scale-105"
                  }
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#4B1A1A] after:transition-all after:duration-300
                  ${active === section ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}