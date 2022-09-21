import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

// describes the home page
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/quizIntro');
    // router.push('/test');
  };
  return (
    <div className="index_body">
      <h1 className="index_title">Froot</h1>
      <div className="index_quiz_enter" onClick={handleClick}>
        <p className="neutralize">
          THE EASIEST PLATFORM TO FIND BRAS THAT FIT.        </p>
        <p className="neutralize">YOUR PERFECT BRA FITS HERE</p>
      </div>
      <div className="general" style={{ width: '350px', height: '25%', alignItems: 'flex-start' }}
        onClick={handleClick}>
        <Image src="/sparkles.gif" width="50%" height="50%"></Image>
        <hr className="index_quiz_line" />
        <Image src="/sparkles.gif" width="50%" height="50%"></Image>
      </div>
    </div>
  );
}
