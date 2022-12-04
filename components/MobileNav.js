import React, { useState } from "react"
import Link from 'next/link';
import { useRouter } from 'next/router';

// Defines mobile menu
export default function MobileNav() {
  let router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }
  // Describes the hamburger implementation
  function Burger() {
    return (
      <>
        <img className="delete-menu" src='/delete.svg' onClick={handleToggle} />
        <div className="menu-items">
          <div className="item">Breast Profile</div>
          <hr />
          <div className="item">The Froot Salad</div>
          <hr />
          <Link href="/quiz">Quiz</Link>
          <hr />
          <div className="item">Store</div>
          <hr />
          <Link href="/about">About Us</Link>
        </div>
        <div className="mobile-sign-in-wrapper">
          <hr />
          <div className="mobile-sign-in">Sign In</div>
          <hr />
          <div className="mobile-sign-in">Sign Up</div>
        </div>
      </>
    )
  };
  return (
    <div className={router.pathname === "/question1" ? "navigation_q1" : "navigation"}>
      <div className="mobile-img-wrapper">
        <img className={navbarOpen ? 'disappear' : 'menu-toggle'} src='/mobile-menu-toggle.svg' onClick={handleToggle}></img>
        <img className="mobile-logo" src='/mobile-logo.svg'></img>
      </div>
      <div className={navbarOpen ? "blur-hamburger" : "hamburger-menu"}>
        {navbarOpen ? <Burger /> : null}
      </div>
    </div >
  )
}
