import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import globalVal from "../middleware/global";
import next from 'next';

export default function Nav() {
  const [user, setUser] = React.useState(undefined);
  console.log(`user: ${user}`);

  // useEffect(() => {
  //   fetch('https://froot-priv.vercel.app/user/auth', {
  //     headers: {
  //       'Authorization': localStorage.getItem('token')
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setUser(data.email);
  //       // window.alert(user);
  //     })
  // }, [globalVal])

  // const user = auth.currentUser;
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        router.push('/questions');
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // logged in nav
  if (user !== undefined) {
    return (
      <div className="default-nav">
        <div className="default-nav-wrapper">
          <Link href="/">
            <Image src="/logo.svg" width="30rem" height="30rem"></Image>
          </Link>
        </div>
        <div className="default-nav-link-wrapper">
          <Link className="default-nav-link" href="#">BREAST PROFILE</Link>
          <Link className="default-nav-link" href="/about">THE FROOT SALAD</Link>
          <Link className="default-nav-link" href="/quiz">QUIZ</Link>
          <Link className="default-nav-link" href="#">STORE</Link>
          <Link className="default-nav-link" href="/about">ABOUT US</Link>
        </div>
        <img className="user-logo" src="/userLogo.svg" />
      </div>
    );
  }
  // default nav
  else {
    return (
      <div className="default-nav">
        <div className="default-nav-wrapper">
          <Link href="/">
            <Image src="/logo.svg" width="30rem" height="30rem"></Image>
          </Link>
        </div>
        <div className="default-nav-link-wrapper">
          <Link className="default-nav-link" href="#">BREAST PROFILE</Link>
          <Link className="default-nav-link" href="/about">THE FROOT SALAD</Link>
          <Link className="default-nav-link" href="/quiz">QUIZ</Link>
          <Link className="default-nav-link" href="#">STORE</Link>
          <Link className="default-nav-link" href="/about">ABOUT US</Link>
        </div>
        {/* <div className="icon-wrapper"> */}
        {/* <img className="user-logo" src="/userLogo.svg" /> */}
        <div className="default-nav-sign-in">Sign In</div>
        <div className="default-nav-sign-in">Sign Up</div>
        {/* </div> */}
      </div>
    );
  }
}
