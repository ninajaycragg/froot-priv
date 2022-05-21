import Link from 'next/link';
import Button from '@mui/material/Button';
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
  } else {
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
          >
            <Link href={'/signup'}>Sign Up</Link>
          </Button>
        </div>
      </div>
    );
  }
}
