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
       shadow-sm → small shadow under navbar
       sticky top-0 → sticks to top
       z-50 → ensures navbar is on top
    */
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* flex → place items in a row
          items-center → vertically center items
          justify-between → space between logo and links
          px-6 sm:px-8 → increased padding on sides
          py-4 → vertical padding
      */}
      <div className="flex items-center justify-between px-6 sm:px-8 py-4">
        {/* Logo */}
        <h1 className="text-[1.5rem] sm:text-[1.625rem] font-bold text-[#4B1A1A]">
          AT
        </h1>
        {/* Navigation links */}
        <ul className="flex gap-10 text-[1.25rem] sm:text-[1.375rem] font-medium tracking-wider">
          {["about", "skills", "projects"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`relative transition-colors duration-300 ${
                  active === section
                    ? "text-[#4B1A1A] after:w-full after:bg-[#4B1A1A] after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300"
                    : "text-[#732525] hover:text-[#4B1A1A] after:w-0 after:bg-[#4B1A1A] after:h-0.5 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300"
                }`}
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