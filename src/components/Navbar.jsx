import { useState, useEffect } from "react";

/* REACT COMPONENT BRIEF:
    export default function Navbar() {
        return <nav>...</nav>;
    }
    - export default: makes component available to other files
    - function Navbar(): creates a JS function named Navbar (in React, function = component)
    - return ...: JSX NOT HTML, React takes JSX (HTML inside JS) and turns it into HTML in the browser
                  return must return ONE thing (so wrap everything in one parent element)
*/

/* USESTATE AND USEEFFECT BRIEF:
   - useState -> React hook to create a piece of STATE inside a functional component
                 (Essentially variables React remembers between renders / run of that fucntion)
   - useEffect -> React hook that lets you run SIDE EFFECTS (e.g. fetching data, event listeners, updating DOM, timers, etc.) when a component mounts (created) / updates
*/

// -------------------- NAVBAR --------------------
export default function Navbar() {
  const [active, setActive] = useState("about");
  /* NOTE (these are all self-made variables):
     - active -> a state variable, holds which section is currently highlighted (e.g. about, projects, or contact)
     - setActive -> function to update active state (e.g. setActive(newValue) instead of changing active directly)
     - useState("about") -> initializes active with "about" by default, if changes React with re-render component / updates page to match new state */

  // Highlights nav link based on scroll position
  /* NOTE: useEffect -> runs ONCE when the component MOUNTS / CREATED 
     - [] -> empty dependency array -> tells React to run effect only once when component in mounted
        - When the navbar component mounts (created), it starts listening to scroll events.
        - When the component unmounts (removed), it cleans up the listener. */ 
  useEffect(() => {
    // HANDLE SCROLL FUNCTION -> Defines function that checks which section is currently at the top of the viewport
    const handleScroll = () => {
      const sections = ["about", "skills", "projects"]; // Array of IDs of page sections
      let current = "about"; // Default section to highlight

      // Loop over each section to check its position
      sections.forEach((section) => {
        // Get the DOM element for this section by its ID
        const el = document.getElementById(section);
        if (el) {
          // Get the distance from the top of the viewport to the top of this element
          const top = el.getBoundingClientRect().top;
          // If the element's top is over 80px from the viewport top, section considered "currently active" (80px offset for navbar height)
          if (top <= 80) current = section; 
        }
      });
      // Update the active state variable so the correct nav link is highlighted
      setActive(current);
    };

    // Attach the handleScroll function to the window's scroll event (handleScroll will run every time the user scrolls)
    window.addEventListener("scroll", handleScroll);

    // CLEANUP FUNCTION (Runs if App dismounts) -> removes the event listener when the component unmounts (Prevents memory leaks and duplicate event listeners)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SMOOTH SCROLL FUNCTION -> Smooth scroll to section when a navlink is clicked
  const scrollToSection = (id) => {
    // Find the DOM element by its ID
    const el = document.getElementById(id);
    // Scroll the element into view with smooth animation
    // NOTE: block: "start" -> ensures the element's top aligns with the viewport top
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    // NAVBAR WRAPPER
    <nav className="w-full top-0 z-50">
      {/* NAVBAR CONTAINER */}
      <div className="flex items-center justify-between px-6 sm:px-8 py-4">

        {/* LOGO */}
        <h1 className="text-[#4e1f2f] scale-y-135 font-heading tracking-wider font-bold text-[2.5rem] sm:text-[2.8rem]">AT</h1>

        {/* NAVIGATION LINKS */}
        {/* NOTE: ul is unordered list, li is list item (best practice for navigation links to be a list for accessibility and styling */}
        <ul className="text-[#4e1f2f] font-heading tracking-wider font-bold flex gap-8 sm:gap-10 md:gap-12 lg:gap-15 text-[1.1rem] sm:text-[1.25rem] font-medium">
          
          {/* Loop over each section name to create a nav link (li and button element for each) */}
          {["about", "projects", "contact"].map((section) => (
            <li key={section} className="relative"> {/* Li element is a SINGLE LINK in the navbar */}
              {/* BUTTON for scrolling to the section */}
              <button
                onClick={() => scrollToSection(section)} // Smooth scroll to the section when clicked
                className={`
                  inline-block relative transition-transform duration-300 transform
                  /* NOTE
                    - inline-block: lets button have width/height and align like text
                    - relative: needed for pseudo-elements (like after:) to position relative to this button */
                  ${active === section
                    ? "text-[#6a1e28] scale-125 -translate-y-1 after:w-full" // ACTIVE navlink styling (after:opacity-100 makes underline visible)
                    : "text-[#4e1f2f] hover:text-[#4B1A1A] hover:scale-105 after:w-0 hover:after:w-full" // INACTIVE navlink and INACTIVE ON HOVER styling
                                                                                                         // (hover:after:opacity-100 makes underline visible on hover only)
                  }
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#4B1A1A]
                  after:transition-all after:duration-300
                `}
              >
                {/* Capitalize first letter of section */}
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              {/* UNDERLINE styling using the ::after pseudo-element
                  ::after pseudo-element --> Essentially an invisible element that can be attached to another element (often used for decorative purposes like underlines, visual effects, etc)
                  NOTE: after:absolute -> positions pseudo-element absolutely relative to the button */}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}