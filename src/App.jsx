import React, { useState, useEffect } from "react";

// Import COMPONENTS
import Navbar      from "./components/Navbar";
import About       from "./components/About";
import Skills      from "./components/Skills";
import Projects    from "./components/Projects";
import ContactForm from "./components/ContactForm";
import SplashScreen from "./components/SplashScreen";
import "./index.css";

// Import FONTS
import "@fontsource/montserrat/700.css";
import "@fontsource/courier-prime";

// -------------------- SECTION FADE CONFIG --------------------
// List of all sections in the app (used for fade-in animation)
const SECTIONS  = ["navbar", "about", "skills", "projects", "contact"];
// Delay for each section's fade-in animation in milliseconds
const DELAYS    = [0, 200, 400, 600, 800];
// Splash screen fade-out delay (ms)
const SPLASH_FADE_DELAY   = 1300;
// Remove splash screen from DOM after this delay (ms)
const SPLASH_REMOVE_DELAY = 1800;
// Start fade-in for sections after this delay (ms)
const SECTION_START_DELAY = 2000;

// -------------------- APP --------------------
export default function App() {
  // State to track if the splash screen is shown (Initially true since want to show splash screen on page load)
  const [showSplash, setShowSplash] = useState(true);
  // State to track if the splash screen is fading out (Will becom etrue after some time to trigger fade-out)
  const [fadeSplash, setFadeSplash] = useState(false);

  // State object to track which sections of the page should be visible 
  /* NOTE: This state tracks multiple things at once (visibility of multiple sections) -> So store all states in a single object instead of creating 5 useStates
          SECTIONS.map((section) => [section, false] OUTPUT:
           [
              ["navbar", false],
              ["about", false],
              ["skills", false],
              ["projects", false],
              ["contact", false]
           ] 
           Object.fromEntries(...) -> Converts an array of key-value pairs into an object, OUTPUT:
           {
            navbar: false,
            about: false,
            skills: false,
            projects: false,
            contact: false
          } */  
  const [visible, setVisible] = useState(
    Object.fromEntries(SECTIONS.map((section) => [section, false]))
  );

  // useEffect runs ONCE when component mounts
  // setTimeout syntax -> setTimeout(callback, delayInMs), callback is a function that runs after the delay
  useEffect(() => {
     // Timer to start splash fade-out after SPLASH_FADE_DELAY (1300ms)
    const fadeTimer   = setTimeout(() => setFadeSplash(true),    SPLASH_FADE_DELAY);
    // Timer to completely remove splash screen after fter SPLASH_REMOVE_DELAY (1800ms)
    const removeTimer = setTimeout(() => setShowSplash(false),   SPLASH_REMOVE_DELAY);

    // Timers for each section to fade in with a staggered delay
    // NOTE: ...prev -> Essentially take everything that was already in the previous state and copy it into this new state object
    const sectionTimers = SECTIONS.map((section, i) =>
      setTimeout(() => {
        // Make this section visible by updating its key in the 'visible' state object
        setVisible((prev) => ({ ...prev, [section]: true })); 
      }, SECTION_START_DELAY + DELAYS[i]) // Each section has a slightly longer delay
    );

    // CLEANUP FUNCTION (Runs if App dismounts) -> Clears all timers 
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      sectionTimers.forEach(clearTimeout);
    };
  }, []); // Empty dependency array → runs only once on mount

  // FADE CLASS FUNCTION -> Returns correct CSS classes for fade-in / fade-out
  // If a section is visible → opacity-100 (fully visible)
  // If not visible → opacity-0 (invisible)
  const fadeClass = (key) =>
    `transition-opacity duration-500 ${visible[key] ? "opacity-100" : "opacity-0"}`;

  return (
    <>
      {/* Render splash screen if showSplash is true 
          - fadeOut = {fadeSplash} -> Start starts as false, set to true inside useEffect after delay
                                      When becomes true, gets passed as fadeOut propr to SplashScreen */}
      {showSplash && <SplashScreen fadeOut={fadeSplash} />}

      <main>
        {/* HERO SECTION */}
        <section className="relative w-full hero-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2 relative z-10">
            <div className={fadeClass("navbar")}><Navbar /></div>
            <div className={fadeClass("about")} ><About /></div>
          </div>
        </section>

        {/* MIDDLE SECTION */}
        <section className="w-full middle-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2">
            <div className={fadeClass("skills")}  ><Skills /></div>
            <div className={fadeClass("projects")}><Projects /></div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <section className="w-full footer-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2">
            <div className={fadeClass("contact")}><ContactForm /></div>
          </div>
        </section>
      </main>
    </>
  );
}