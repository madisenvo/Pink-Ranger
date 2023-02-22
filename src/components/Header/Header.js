// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import './header.css';

// export default function Header() {
//   return (
//     <Navbar className="nav">
//     <Container>
//       <a href="/"> <h1 className="name">Pink Ranger</h1></a> 
//       <Nav className="justify-content-end">
//         <Link to="/Music" className="nav-link">Music</Link>
//         <Link to="/Shows" className="nav-link">Shows</Link>
//         <Link to="/Contact" className="nav-link">Contact</Link>
//       </Nav>
//     </Container>
//   </Navbar>
//   )
// }

import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            className='ms-auto'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal3}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 1
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 2
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 2
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}