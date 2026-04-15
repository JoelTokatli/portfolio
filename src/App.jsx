import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Form from "./components/Form";
import Experience from "./components/Experience";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-dark-900 font-sans">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Form />
      </div>
    </LanguageProvider>
  );
}

export default App;
