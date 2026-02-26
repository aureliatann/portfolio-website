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
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import "./index.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  // Track which main sections are visible
  const [visible, setVisible] = useState({
    navbar: false,
    about: false,
    skills: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    // Splash fade out after 2s
    const fadeTimer = setTimeout(() => setFadeSplash(true), 1500);
    const removeTimer = setTimeout(() => setShowSplash(false), 2000);

    // Section-level stagger
    const staggerDelays = [0, 100, 200, 300, 400];
    const sections = ["navbar", "about", "skills", "projects", "contact"];
    sections.forEach((section, i) => {
      setTimeout(() => {
        setVisible((prev) => ({ ...prev, [section]: true }));
      }, 2500 + staggerDelays[i]); // start after splash removed
    });

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showSplash && <SplashScreen fadeOut={fadeSplash} />}

      <main>
        {/* Hero */}
        <section className="relative w-full hero-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2 relative z-10">
            <div className={`transition-opacity duration-500 ${visible.navbar ? "opacity-100" : "opacity-0"}`}>
              <Navbar />
            </div>
            <div className={`transition-opacity duration-500 ${visible.about ? "opacity-100" : "opacity-0"}`}>
              <About />
            </div>
          </div>
        </section>

        {/* Middle */}
        <section className="w-full middle-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2">
            <div className={`transition-opacity duration-500 ${visible.skills ? "opacity-100" : "opacity-0"}`}>
              <Skills />
            </div>
            <div className={`transition-opacity duration-500 ${visible.projects ? "opacity-100" : "opacity-0"}`}>
              <Projects />
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="w-full footer-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2">
            <div className={`transition-opacity duration-500 ${visible.contact ? "opacity-100" : "opacity-0"}`}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Splash screen with subtitle
function SplashScreen({ fadeOut }) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#4e1f2f] z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="font-heading text-8xl md:text-10xl text-[#e4d9d1] scale-y-135">AT</h1>
      <h2 className="font-heading text-LG md:text-xl text-[#e4d9d1] mt-4 tracking-wider">FULL-STACK DEVELOPER</h2>
    </div>
  );
}