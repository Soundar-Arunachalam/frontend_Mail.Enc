import React, { useState } from "react";
import './App.css';

const App = () => {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const handleDownloadClick = () => {
    setShowDownloadOptions(true);
  };

  const handleDownload = (browser) => {
    if (browser === "chrome") {
      // Replace with the path to the Chrome extension folder
      window.location.href = "mailvelope.chrome.zip";
    } else if (browser === "firefox") {
      // Replace with the path to the Firefox extension folder
      window.location.href = "/path/to/firefox-extension.zip";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Logo */}
        <div className="logo">
          <img src="./logo.png" alt="Mail.Enc Logo" />
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><button onClick={handleDownloadClick}>Download Chrome Extension</button></li>
          </ul>
        </nav>

        {/* Download Options */}
        {showDownloadOptions && (
          <div className="download-options">
            <button onClick={() => handleDownload("chrome")}>Download for Chrome</button>
            <button onClick={() => handleDownload("firefox")}>Download for Firefox</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
