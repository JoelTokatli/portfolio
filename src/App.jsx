import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Form from "./components/Form";

function App() {
  return (
    <div className="bg-cyan-900 font-roboto">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Form />
    </div>
  );
}

export default App;
