import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Portfolio from "./pages/portfolio/Portfolio.js";
import Resume from "./pages/resume/Resume.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/React-Portfolio" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

