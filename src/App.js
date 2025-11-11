import React from "react";
import "./App.css";

function App() {
  return (
    <>
      
      <header className="navbar">
        <h2 className="logo">Tringa Gashi</h2>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

     
      <section className="hero">
        <div className="hero-gradient"></div>

        <h1 className="hero-title">Hello, I'm Tringa 👋</h1>

        <p className="hero-subtitle">
          Software Developer | Python Mentor | Web Developer
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/tringagashi"
            className="hero-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/tringa-gashi-44b318293/"
            className="hero-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          I am a final-year Computer Science & Engineering student, currently
          working on my diploma thesis. I work as an administrator and
          programming mentor at Elite School, teaching Python, Game Programming
          with Unity, and Microsoft Office. I am passionate about modern web 
          development, technology, and helping students succeed in coding.
        </p>
      </section>

     
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-container">
          <div className="skill-box">React.js</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">Node.js</div>
          <div className="skill-box">Express.js</div>
          <div className="skill-box">SQLite / SQL</div>
          <div className="skill-box">Python</div>
          <div className="skill-box">Unity C#</div>
          <div className="skill-box">HTML / CSS</div>
          <div className="skill-box">Git & GitHub</div>
          <div className="skill-box">Team Communication</div>
        </div>
      </section>

     
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>

        <div className="exp-item">
          <h3 className="exp-role">Administrator & Programming Mentor</h3>
          <p className="exp-company">Elite School | Nov 2024 – Present</p>
          <p className="exp-desc">
            Teaching Python (beginner to advanced), game programming with Unity,
            Microsoft Office, physics, and mathematics. Supporting student learning,
            engagement, and motivation.
          </p>
        </div>

        <div className="exp-item">
          <h3 className="exp-role">Python Internship</h3>
          <p className="exp-company">Sharp Group | 2022 – 2023</p>
          <p className="exp-desc">
            Developed Python-based mini projects, data handling, and automation scripts.
          </p>
        </div>

        <div className="exp-item">
          <h3 className="exp-role">Electronics Member</h3>
          <p className="exp-company">BONEVET | 2020 – 2022</p>
          <p className="exp-desc">
            Worked on hardware, circuits, and basic electronic components.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Task Manager</h3>
            <p>Full-Stack task management app with authentication and SQLite database.</p>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Modern React.js portfolio with gradient UI and interactive sections.</p>
          </div>

          <div className="project-card">
            <h3>E-Learning System</h3>
            <p>Platform with CRUD functionality for courses and student management.</p>
          </div>

          <div className="project-card">
            <h3>Our Coffee Shop</h3>
            <p>Frontend UI/UX design for a café business website.</p>
          </div>
        </div>
      </section>

      
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <p className="contact-info">
          📧 Email: <a href="mailto:tringaagashi@gmail.com">tringaagashi@gmail.com</a>
          <br />
          📍 Location: Gjakovë, Kosovo
        </p>
      </section>
    </>
  );
}

export default App;
