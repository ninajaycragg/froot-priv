import React, { useEffect } from 'react';
import Image from 'next/image'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function QuizIntro() {
  const router = useRouter();
  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter') {
        event.preventDefault();
        handleClick();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  const handleClick = () => {
    router.push('/question1');
  };
  return (
    <div
      style={{
        backgroundColor: '#FAF8F1',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '45%',
          height: '40%',
          marginTop: '15%',
          textAlign: 'center',
        }}
      >
        <div style={{width: '100%', width: '100%', display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <Image src="/sparkles.gif" height="50%" width="50%"></Image>
          <h1
            style={{
              margin: '0',
              fontFamily: 'Tempios Headline',
              fontWeight: '400',
              fontSize: '200%',
              fontStyle: 'italic'
            }}
          >
            &nbsp;Welcome to Froot&nbsp;
          </h1>
          <Image src="/sparkles.gif" height="50%" width="50%"></Image>
        </div>
        <p style={{ fontFamily: 'Inter', fontWeight: '300', lineHeight: '150%' }}>
        The following questionnaire helps our team at Froot best understand your size, desired fit, and style. Please take this test in a private and comfortable setting as you will have to undress for the self-sizing portion of our quiz.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            marginTop: '5%',
          }}
        >
          <Button
            onClick={handleClick}
            variant="outlined"
            style={{
              borderRadius: '5px',
              width: '15%',
              fontFamily: 'Inter',
              backgroundColor: '#FAF8F1',
              color: 'black',
              padding: '1%',
              border: '1px solid black',
            }}
          >
            START
          </Button>

          <h1
            style={{
              color: '#670224',
              fontFamily: 'Inter',
              fontWeight: '400',
              fontSize: '100%',
              width: '15%',
            }}
          >
            press <b>Enter</b>
          </h1>
        </div>
      </div>
    </div>
  );
}
