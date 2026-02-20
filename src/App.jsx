// App.jsx -> main component, everything on website goes here oR inside components imported here
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-16">
      <About />
      <Skills />
      <Projects />
    </div>
  );
}