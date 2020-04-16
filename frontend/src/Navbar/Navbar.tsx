import React from 'react';
import './Navbar.css';
import NavItem from './NavItem';
import NavTitle from "./NavTitle";
import {
  Link
} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">

        <NavTitle link="#"/>

        <NavItem name="Buenos Aires" link="/"/>

        <NavItem name="Los Angeles" link="/los-angeles"/>

        <NavItem name="Miami" link="/miami"/>

        <NavItem name="Londres" link="/london"/>

      </ul>
    </nav>
  );
}

export default Navbar;

