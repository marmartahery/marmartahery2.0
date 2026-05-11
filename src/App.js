import React, { useState, useEffect } from 'react';
import Home from './Home.js';
import './App.css';
import icon from './assets/favicon.png'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <header>
        {/* <h1 className="nav-header">MT</h1> */}
      <img className="icon" src={icon}></img>
        <nav className="nav">
          {/* <a href="#" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a> */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      <main className="main">
        <Home />
      </main>

    </div>
  );
}

export default App;
