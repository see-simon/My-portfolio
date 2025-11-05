import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  // Fade-in animation on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <section id="about" className="hidden"><About /></section>
      <section id="experience" className="hidden"><Experience /></section>
      <section id="skills" className="hidden"><Skills /></section>
      <section id="education" className="hidden"><Education /></section>
      <section id="projects" className="hidden"><Projects /></section>
      <section id="contact" className="hidden"><Contact /></section>
    </div>
  );
}

export default App;
