import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KeyServer from "./pages/KeyServer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keyserver" element={<KeyServer />} />
      </Routes>
    </>
  );
};

export default App;
