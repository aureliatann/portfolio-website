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
import SplashScreen from "./components/SplashScreen"; // ⭐ NEW
import "./index.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  const [visible, setVisible] = useState({
    navbar: false,
    about: false,
    skills: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeSplash(true), 1300);
    const removeTimer = setTimeout(() => setShowSplash(false), 1800);

    const sections = ["navbar", "about", "skills", "projects", "contact"];
    const delays = [0, 200, 400, 600, 800];

    sections.forEach((section, i) => {
      setTimeout(() => {
        setVisible((prev) => ({ ...prev, [section]: true }));
      }, 2000 + delays[i]);
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
        <section className="relative w-full hero-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2 relative z-10">
            <div
              className={`transition-opacity duration-500 ${
                visible.navbar ? "opacity-100" : "opacity-0"
              }`}
            >
              <Navbar />
            </div>

            <div
              className={`transition-opacity duration-500 ${
                visible.about ? "opacity-100" : "opacity-0"
              }`}
            >
              <About />
            </div>
          </div>
        </section>

        <section className="w-full middle-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2">
            <div
              className={`transition-opacity duration-500 ${
                visible.skills ? "opacity-100" : "opacity-0"
              }`}
            >
              <Skills />
            </div>

            <div
              className={`transition-opacity duration-500 ${
                visible.projects ? "opacity-100" : "opacity-0"
              }`}
            >
              <Projects />
            </div>
          </div>
        </section>

        <section className="w-full footer-gradient">
          <div className="max-w-8xl mx-auto px-6 py-2">
            <div
              className={`transition-opacity duration-500 ${
                visible.contact ? "opacity-100" : "opacity-0"
              }`}
            >
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}