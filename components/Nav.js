import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../firebase-config';

export default function Nav() {
  const user = auth.currentUser;
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        router.push('/quiz');
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // logged in nav
  if (user) {
    return (
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '0.8%',
          paddingBottom: '0.8%',
        }}
      >
        <div style={{ width: '33.3%', paddingLeft: '2.78%', margin: 'auto' }}>
          <Link href="/">
            <a style={{ fontWeight: '700' }}>FROOT</a>
          </Link>
        </div>
        <div
          style={{
            width: '33.3%',
            display: 'flex',
            justifyContent: 'space-evenly',
            margin: 'auto',
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/quiz">Quiz</Link>
        </div>
        <div
          style={{
            width: '33.3%',
            textAlign: 'right',
            paddingRight: '2.78%',
            margin: 'auto',
          }}
        >
          <Button
            variant="outlined"
            size="small"
            disableElevation
            color="inherit"
            style={{
              textTransform: 'capitalize',
              paddingLeft: '5%',
              paddingRight: '5%',
            }}
            onClick={handleClick}
          >
            Sign Out
          </Button>
        </div>
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
        <div
          style={{
            width: '15%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <Image src="/userLogo.svg" height="20%" width="20%"></Image>
          <Image src="/searchLogo.svg" height="20%" width="20%"></Image>
          <Image src="/cartLogo.svg" height="20%" width="20%"></Image>
        </div>
      </div>
    );
  }
}
