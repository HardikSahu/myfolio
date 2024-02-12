import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} />
        <Route path="/languages" exact Component={Languages} />
        <Route path="/contact" exact Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
