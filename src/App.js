import HeroImage from "./components/HeroImage";
import Navigation from "./components/Navigation";
import Programs from "./components/Programs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="relative pt-6 pb-16 sm:pb-24 bg-gray-50 overflow-hidden">
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroImage />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}
