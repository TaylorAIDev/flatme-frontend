import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchComponent from '../Search';

const Header = () => {
  return (
    <div className='header'>
      <Navbar expand="lg" >
        
        {/* <Navbar.Brand href="/" style={{ marginleft: '1em' }}>◀</Navbar.Brand>
        <Navbar.Brand href="/">▶</Navbar.Brand>
        <Navbar.Brand href="/">❌</Navbar.Brand>
        <Navbar.Brand href="/">🏠</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="ml-auto">
          <SearchComponent />
        </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;