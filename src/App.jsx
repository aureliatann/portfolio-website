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


export default function App() {
  return (
    <section className="w-full min-h-screen 
                   bg-[#F5F1E6]">

      {/* Your page content */}
      <Navbar />
      <div className="max-w-8xl mx-auto p-6 space-y-5 relative z-10">
        <About />
      </div>
    </section> // <-- close the section here
  );
}