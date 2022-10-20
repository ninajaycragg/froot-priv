import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image'; import globalVal from "./global";

export default function Quiz() {
  return (
    <div
      className="general"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FAF8F1',
      }}
    >
      <div style={{ width: '50%', height: '100%' }} className="general">
        <Image src="/pizza.svg" width="500%" height="500%"></Image>
      </div>
      <div
        style={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="general" style={{ justifyContent: 'left' }}>
          <p
            className="neutralize"
            style={{
              fontWeight: '500',
              fontFamily: 'Inter',
              fontSize: '70%',
              marginRight: '1%',
            }}
          >
            THE FROOT EXPERIENCE
          </p>
          <Image src="/sparkles.gif" width="20%" height="20%"></Image>
        </div>
        <hr style={{ width: '60%', marginLeft: '0', marginBottom: '5%' }} />
        <h1
          className="neutralize"
          style={{
            fontFamily: 'tempios family',
            fontStyle: 'italic',
            fontWeight: '400',
            width: '60%',
            textAlign: 'left',
            marginBottom: '5%',
            lineHeight: '40px',
          }}
        >
          Bras that fit you are out there. We&apos;ll help you find them.
        </h1>
        <Button
          variant="filled"
          size="small"
          style={{
            width: '30%',
            height: '5%',
            textAlign: 'center',
            textTransform: 'capitalize',
            color: 'white',
            background: '#670224',
            paddingLeft: '3%',
            paddingRight: '3%',
            weight: '400',
          }}
        >
          <Link href={'/quizIntro'}>Start the Quiz</Link>
        </Button>
      </div>
    </div>
  );
}
