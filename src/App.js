import React from "react";
import "./App.css";


import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="portfolio">

      <header className="nav">
        <h1>Tringa Gashi</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

    
      <section className="hero">
       

        <h2>Hello, I'm Tringa 👋</h2>
        <p>Software Developer | Python Mentor | Web Developer</p>

        <div className="hero-buttons">
          <a
            href="https://github.com/tringagashi"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/tringa-gashi-44b31a893"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            LinkedIn
          </a>
        </div>
      </section>

      
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer>
        © 2025 Tringa Gashi — All Rights Reserved
      </footer>

    </div>
  );
}

export default App;
