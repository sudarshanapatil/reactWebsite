import React from 'react';
// import {
//     Button, Form, NavDropdown, Navbar, Nav, FormControl
// } from 'react-bootstrap';
import '../styles/Navbar.css'

const data = [
  'Home','about us', 'contact us'
]

function NavbarComp() {
  return (
    <div className='wrapper'>
     
      {
        data.map((navMenu, index) => {
          return (<a href={`#${navMenu}`} key={index} className={navMenu === 'Home' ? 'active' : 'navbarMenu'}>
            {navMenu}
          </a>)
        })
      }
       <a href="s" className="icon" onClick="myFunction()">
        <i className="fa fa-bars"></i>
      </a>

    </div>
  );
}

export default NavbarComp;

