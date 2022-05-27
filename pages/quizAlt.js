import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function QuizAlt() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/quizIntro');
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignContent: 'center',
        backgroundColor: '#FAF8F1',
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
          src="/imageAltCropped.png"
          width="100vw"
          height="100vh"
          layout="fill"
          objectFit="fill"
          alt="intro quiz image"
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
          onClick={handleClick}
        >
          Take the Quiz
        </Button>
      </div>
    </div>
  );
}
