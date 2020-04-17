import React from 'react';
import './Navbar.css';
import NavItem from './NavItem';
import NavTitle from "./NavTitle";


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">

        <NavTitle link="#"/>

        <NavItem name="Actual" link="/"/>

        <NavItem name="Rio de Janeiro" link="/rio-janeiro"/>

        <NavItem name="Los Angeles" link="/los-angeles"/>

        <NavItem name="Miami" link="/miami"/>

        <NavItem name="Londres" link="/london"/>

        <NavItem name="San Petersburgo" link="/san-petersburgo"/>

      </ul>
    </nav>
  );
}

export default Navbar;

