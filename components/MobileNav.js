import React, { useState } from "react"
import Burger from './Burger.js';
// import Image from 'next/image';

export default function MobileNav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <div>
      <div className="navigation">
        <ul>
          <li>home</li>
          <li>abiyt</li>
          <li>contact</li>
        </ul>
        <div className="hamburger-menu">
          <img className="menu-toggle" src='/mobile-menu-toggle.svg' onClick={handleToggle}></img>
          {navbarOpen ? <Burger /> : null}
        </div>
      </div>
    </div >
  )
}
