import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BlobBackground from "./components/BlobBackground";
import ContactForm from "./components/ContactForm";
import "./index.css";

// Import fonts
import "@fontsource/inter"; // default weight 400
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "@fontsource/playfair-display/400.css"; // regular
import "@fontsource/playfair-display/800-italic.css"; // bold

// App.jsx (or top-level file)
import "@fontsource/montserrat"; // default 400 weight
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

import "@fontsource/courier-prime";       // 400
import "@fontsource/courier-prime/700.css"; // bold

export default function App() {
  return (
  <>
    {/* Gradient only here */}
    <section className="relative w-full hero-gradient">
      <div className="max-w-8xl mx-auto px-6 py-1 relative z-10">
        <Navbar />
        <About />
      </div>
    </section>

    {/* No gradient here */}
    <section className="w-full bg-[#fbfaf8]">
      <div className="max-w-8xl mx-auto px-6 py-1">
        <Skills />
        <Projects />
      </div>
    </section>

    {/* Footer gradient here */}
    <section className="w-full">
      <div className="max-w-8xl mx-auto px-6 py-1">
      </div>
    </section>
  </>
);
}