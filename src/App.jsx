import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import KeySearch from "./pages/KeySearch.jsx"
import axios from "axios";
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
                href="./Mail.Enc.chrome.zip"
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
                href="./Mail.Enc.firefox.zip"
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

const KeyServer = () => {

  const [email, setEmail] = useState("");
  const [keyDetails, setKeyDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
      try {
          setError(null); // Reset error
          setKeyDetails(null); // Reset previous search result
const strreq=`http://localhost:3001/public-key?email=${email}`
          const response = await axios.get(strreq);
          console.log(response);
          setKeyDetails(response.data); // Update key details
      } catch (err) {
        console.log(err);
          setError(err.response?.data?.message || "An error occurred");
      }
  }


  return (
      <div className="container">
          <div className=" card1">
              <h1 className="title">Key Search</h1>
              <div className="form-group">
                  <label htmlFor="email" className="label">
                      Enter Email:
                  </label>
                  <input
                      type="email"
                      id="email"
                      className="input"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <button onClick={handleSearch} className="button">
                  Search
              </button>

              {error && <div className="error">No user found</div>}

              {keyDetails && (
    <div className="result" style={{ margin: '20px 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>Key Details:</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <textarea
                readOnly
                value={keyDetails.publicKey}
                style={{
                    width: '80%',
                    height: '200px',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9',
                    color: '#555',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                    resize: 'none',
                    overflow: 'auto',
                }}
            />
            <button
                onClick={() => navigator.clipboard.writeText(keyDetails.publicKey)}
                style={{
                    marginTop: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    cursor: 'pointer',
                }}
            >
                Copy to Clipboard
            </button>
        </div>
    </div>
)}

          </div>
      </div>
  )}





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
