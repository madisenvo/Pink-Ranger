import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <Navbar className="nav">
    <Container>
      <h1 className="name">Madisen Vogel</h1>
      <Nav className="justify-content-end">
        <Link to="/React-Portfolio" className="nav-link">About Me</Link>
        <Link to="/Portfolio" className="nav-link">Portfolio</Link>
        <Link to="/Contact" className="nav-link">Contact Me</Link>
        <Link to="/Resume" className="nav-link">Resume</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
