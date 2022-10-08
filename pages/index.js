import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/quizIntro');
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FAF8F1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        className="neutralize general"
        style={{
          fontSize: '1300%',
          fontFamily: 'Tempios Headline',
          fontStyle: 'italic',
          fontWeight: '300',
          width: '100%',
          textAlign: 'center',
          height: '50%',
        }}
      >
        Froot
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'center',
          width: '100%',
          height: '25%',
          fontSize: '80%',
          fontFamily: 'Inter',
          letterSpacing: '1px',
          fontWeight: '500',
        }}
        onClick={handleClick}
      >
        <p className="neutralize">
          THE EASIEST PLATFORM TO FIND BRAS THAT FIT.        </p>
        <p className="neutralize">YOUR PERFECT BRA FITS HERE</p>
      </div>
      <div
        className="general"
        style={{ width: '350px', height: '25%', alignItems: 'flex-start' }}
        onClick={handleClick}
      >
        <Image src="/sparkles.gif" width="50%" height="50%"></Image>
        <hr style={{ width: '100%', marginRight: '2%', marginLeft: '2%', marginTop: '5%' }} />
        <Image src="/sparkles.gif" width="50%" height="50%"></Image>
      </div>
    </div>
  );
}
