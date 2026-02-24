import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BlobBackground from "./components/BlobBackground";
import ContactForm from "./components/ContactForm";

// Import fonts
import "@fontsource/inter"; // default weight 400
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "@fontsource/playfair-display/400.css"; // regular
import "@fontsource/playfair-display/800.css"; // bold

export default function App() {
  return (
    <div className="relative"> {/* whole page wrapper */}
      <BlobBackground />      {/* behind everything */}

      <Navbar />
      <div className="h-20" />

      {/* Your page content */}
      <div className="max-w-6xl mx-auto p-6 space-y-5 relative z-10">
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </div>
    </div>
  );
}