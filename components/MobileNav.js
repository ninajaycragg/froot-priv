import React, { useState } from "react"
import Link from 'next/link';
// import Burger from './Burger.js';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function MobileNav() {
  let router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    // handleClose();
    // if (navbarOpen == false) {
    setNavbarOpen(!navbarOpen);
    // }
  }
  const handleClose = () => {
    // setNavbarOpen(false);
  }
  function Burger() {
    // add auth checks to display different menu
    // const user = auth.currentUser;
    return (
      <>
        <img className="delete-menu" src='/delete.svg' onClick={handleToggle} />
        <div className="menu-items">
          {/* <img className="delete-menu" src='/delete.svg' /> */}
          <div className="item">Breast Profile</div>
          <hr />
          <div className="item">The Froot Salad</div>
          <hr />
          <Link href="/quizIntro">Quiz</Link>
          <hr />
          <div className="item">Store</div>
          <hr />
          <Link href="/about">About Us</Link>
        </div>
      </>
    )
  };
  return (
    // <div className="mobile-nav-wrapper">
    <div className={router.pathname === "/question1" ? "navigation_q1" : "navigation"}>
      <div className="mobile-img-wrapper">
        <img className={navbarOpen ? 'disappear' : 'menu-toggle'} src='/mobile-menu-toggle.svg' onClick={handleToggle}></img>
        <img className="mobile-logo" src='/mobile-logo.svg'></img>
      </div>
      <div className={navbarOpen ? "blur-hamburger" : "hamburger-menu"}>
        {/* <img className="menu-toggle" src={toggleIcon} onClick={handleToggle}></img> */}
        {navbarOpen ? <Burger /> : null}
      </div>
    </div >
  )
}
