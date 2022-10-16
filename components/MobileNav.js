import React, { useState } from "react"
import Burger from './Burger.js';
// import Image from 'next/image';

export default function MobileNav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState('/mobile-menu-toggle.svg');
  const handleToggle = () => {
    if (navbarOpen == true) {
      setToggleIcon('/mobile-menu-toggle.svg');
    }
    else {
      setToggleIcon('/delete.svg');
    }
    setNavbarOpen(!navbarOpen);
  }
  return (
    <div>
      <div className="navigation">
        <div className="hamburger-menu">
          <img className="menu-toggle" src={toggleIcon} onClick={handleToggle}></img>
          {navbarOpen ? <Burger /> : null}
        </div>
      </div>
    </div >
  )
}
