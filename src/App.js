import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Music from "./pages/music/Music.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/home/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

