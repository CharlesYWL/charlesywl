import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import resumeData from "./resumeData.js";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home resumeData={resumeData} />
      <About resumeData={resumeData} />
    </div>
  );
}

export default App;
