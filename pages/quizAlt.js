import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function QuizAlt() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignContent: 'center',
      }}
    >
      <div
        style={{
          width: '65%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Image
          src="/quizIntroImage3.svg"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="none"
        ></Image>
      </div>
      <div
        style={{
          width: '35%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            width: '70%',
            marginBottom: '5%',
            fontFamily: 'Tempios Headline',
            fontWeight: '800',
          }}
        >
          Say hello to your perfect bra.
        </h1>
        <h3
          style={{
            width: '70%',
            fontFamily: 'Inter',
            fontWeight: '400',
            margin: '0',
            marginBottom: '5%',
          }}
        >
          Improve you outfits, your comfort, and feel the confidence that comes
          with long-term bra support.
        </h3>
        <Button
          variant="filled"
          style={{
            color: 'white',
            backgroundColor: 'black',
            width: '70%',
            fontFamily: 'Inter',
            fontWeight: '700',
            borderRadius: '3px',
            height: '50px',
          }}
        >
          Take the Quiz
        </Button>
      </div>
    </div>
  );
}
