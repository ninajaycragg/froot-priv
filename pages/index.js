import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <div className="grayBackdrop">
        <h1
          style={{
            fontWeight: '500',
            paddingLeft: '9.38%',
            margin: '0',
            paddingTop: '9.38%',
            fontSize: '50px',
            width: '30%',
          }}
        >
          Find your fit.
        </h1>
        <p
          style={{
            width: '25%',
            fontWeight: '400',
            color: 'black',
            position: 'absolute',
            top: '55%',
            right: '65%',
          }}
        >
          Description of froot here. consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div
          style={{
            background: 'white',
            width: '50%',
            height: '80%',
            position: 'absolute',
            right: '5%',
            top: '7%',
            border: '1px solid black',
          }}
        ></div>
        <Button
          variant="outlined"
          style={{
            color: 'white',
            background: 'black',
            position: 'absolute',
            top: '70%',
            left: '10%',
            textTransform: 'capitalize',
            paddingLeft: '3%',
            paddingRight: '3%',
          }}
        >
          <Link href={'/quiz'}>Take the Quiz</Link>
        </Button>
      </div>
      <div
        style={{
          width: '100vw',
          height: '3000px',
          background: 'white',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1
          id="landingh1"
          style={{
            color: 'black',
            fontWeight: '300',
            width: '60%',
            marginTop: '10%',
            fontSize: '40px',
          }}
        >
          Froot is a personalized bra-sizing platform that is completely
          shifting the way that clothing is fitted, sized, and bought.
        </h1>
      </div>
    </div>
  );
}
