import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">

      <header>
        <h1 className="nav-header">MT</h1>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/exp" className="nav-link">Experience</Link>
            <Link to="/skiprj" className="nav-link">Skills and Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
      </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} MarMar Tahery. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
