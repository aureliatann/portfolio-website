import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/800-italic.css";

import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

import "@fontsource/courier-prime";
import "@fontsource/courier-prime/700.css";

import React, { useState, useEffect } from "react";

import Navbar      from "./components/Navbar";
import About       from "./components/About";
import Skills      from "./components/Skills";
import Projects    from "./components/Projects";
import ContactForm from "./components/ContactForm";
import SplashScreen from "./components/SplashScreen";
import "./index.css";

// -------------------- SECTION FADE CONFIG --------------------
const SECTIONS  = ["navbar", "about", "skills", "projects", "contact"];
const DELAYS    = [0, 200, 400, 600, 800];
const SPLASH_FADE_DELAY   = 1300;
const SPLASH_REMOVE_DELAY = 1800;
const SECTION_START_DELAY = 2000;

// -------------------- APP --------------------
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  const [visible, setVisible] = useState(
    Object.fromEntries(SECTIONS.map((s) => [s, false]))
  );

  useEffect(() => {
    const fadeTimer   = setTimeout(() => setFadeSplash(true),    SPLASH_FADE_DELAY);
    const removeTimer = setTimeout(() => setShowSplash(false),   SPLASH_REMOVE_DELAY);

    const sectionTimers = SECTIONS.map((section, i) =>
      setTimeout(() => {
        setVisible((prev) => ({ ...prev, [section]: true }));
      }, SECTION_START_DELAY + DELAYS[i])
    );

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      sectionTimers.forEach(clearTimeout);
    };
  }, []);

  const fadeClass = (key) =>
    `transition-opacity duration-500 ${visible[key] ? "opacity-100" : "opacity-0"}`;

  return (
    <>
      {showSplash && <SplashScreen fadeOut={fadeSplash} />}

      <main>
        {/* Hero */}
        <section className="relative w-full hero-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2 relative z-10">
            <div className={fadeClass("navbar")}><Navbar /></div>
            <div className={fadeClass("about")} ><About /></div>
          </div>
        </section>

        {/* Middle */}
        <section className="w-full middle-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2">
            <div className={fadeClass("skills")}  ><Skills /></div>
            <div className={fadeClass("projects")}><Projects /></div>
          </div>
        </section>

        {/* Footer */}
        <section className="w-full footer-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2">
            <div className={fadeClass("contact")}><ContactForm /></div>
          </div>
        </section>
      </main>
    </>
  );
}