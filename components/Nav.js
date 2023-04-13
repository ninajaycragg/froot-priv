import Link from 'next/link';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useRouter } from 'next/router';
import EditAccount from "../pages/editAccount";
import React, { useEffect } from 'react';
import globalVal from "../middleware/global";
import next from 'next';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// describes the desktop menu
export default function Nav() {
  const [user, setUser] = React.useState(undefined);
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const handleModalOpen = () => {
    setDrawerIsOpen(false);
    setModalIsOpen(true);
  }
  const handleModalClose = () => {
    setModalIsOpen(false);
  }
  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  }
  // Check if a user is logged in
  useEffect(() => {
    fetch('api/auth', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.email);
        // window.alert(user);
      })
  }, [globalVal])
  // const user = auth.currentUser;
  const router = useRouter();
  function handleSignin(e) {
    e.preventDefault();
    router.push("/login");
  }
  function handleSignup(e) {
    e.preventDefault();
    router.push("/signup");
  }

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');

    router.push('/login').then(() => router.reload());
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
        <img className="user-logo" href="/userProfile" src="/userLogo.svg" onClick={toggleDrawer} />
        <div className="default-nav-sign-in" onClick={handleClick}>Sign Out</div>
        <Drawer
          anchor="right"
          open={drawerIsOpen}
          onClose={toggleDrawer}
        >
          <Button variant="outlined" size="large" onClick={handleModalOpen} >

            Account
          </Button>

        </Drawer>
        <Modal
          open={modalIsOpen}
          onClose={handleModalClose}
        >
          <Box sx={style}>
            <EditAccount isModal={true} />



          </Box>



        </Modal>
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
        <div className="default-nav-sign-in" onClick={handleSignin}>Sign In</div>
        <div className="default-nav-sign-in" onClick={handleSignup}>Sign Up</div>
      </div >
    );
  }
}
