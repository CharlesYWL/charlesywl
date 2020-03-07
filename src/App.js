import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import resumeData from "./resumeData.js";
import About from "./components/About";
import Work from "./components/Works";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Work resumeData={resumeData} />
      <Footer />
    </div>
  );
}

export default App;
