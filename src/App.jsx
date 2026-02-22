// App.jsx -> main component, everything on website goes here OR inside components imported here
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* Spacer so content isn't hidden behind fixed navbar */}
      <div className="h-20"></div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto p-6 space-y-16">
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}