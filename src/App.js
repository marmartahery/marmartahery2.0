import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1 className="name">MarMar Tahery</h1>
          <h3 className="note">NEW WEBSITE UNDER CONSTRUCTION, COME BACK SOON</h3>
          <p className="title">Associate Systems Engineer &amp; Web Developer</p>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            {/* Add other links here */}
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
