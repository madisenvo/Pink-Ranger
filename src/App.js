import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Music from "./pages/music/Music.js";
import Shows from "./pages/shows/Shows.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/React-Portfolio" element={<About />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

