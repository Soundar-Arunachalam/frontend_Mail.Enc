import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./app.css";

const Navbar = () => (
  <nav className="navbar">
    <div>
    <img src="logo.png" width="32"></img>
    </div>
    <div>
      
      <h1>Mail.Enc</h1>
    </div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/keyserver">Key Server</Link>
    </div>
  </nav>
);

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="container">
      <h2>Welcome to Mail.Enc</h2>
      <button className="button" onClick={handleDownloadClick}>
        Download Extension
      </button>
      {showPopup && (
        <div className="card-container">
          <div className="card">
            <img
              src="/chrome-logo.png"
              alt="Chrome Logo"
              className="card-logo"
            />
            <div className="card-footer">
              <a
                href="/path-to-chrome-extension-folder.zip"
                download="chrome-extension-folder.zip"
                className="button"
              >
                Download for Chrome
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="/firefox-logo.png"
              alt="Firefox Logo"
              className="card-logo"
            />
            <div className="card-footer">
              <a
                href="/path-to-firefox-extension-folder.zip"
                download="firefox-extension-folder.zip"
                className="button"
              >
                Download for Firefox
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const KeyServer = () => (
  <div className="container">
    <h2>Key Server Page</h2>
    <p>Manage your encryption keys here.</p>
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/keyserver" element={<KeyServer />} />
    </Routes>
  </Router>
);

export default App;
