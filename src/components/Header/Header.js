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
      <h1 className="name">Pink Ranger</h1>
      <Nav className="justify-content-end">
        <Link to="/About" className="nav-link">About</Link>
        <Link to="/Music" className="nav-link">Music</Link>
        <Link to="/Shows" className="nav-link">Shows</Link>
        <Link to="/Contact" className="nav-link">Contact</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
