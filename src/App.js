import "./App.css";
import React from "react";
import "./App.css";
import "./cv.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import CV from "./components/CV";
//import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/cv" element={<CV />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>

        {/* <Route path="aboutme" component={<AboutMe />} /> */}

        {/* 
        <Route path="/" element={<Contact />}></Route>
        <Route path="/" element={<Projects />}></Route> */}
      </div>
    </Router>
  );
}

export default App;
