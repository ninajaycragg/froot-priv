import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { auth } from '../firebase-config';

export default function Quiz() {
  // const user = auth.currentUser;
  // if (user) {
  //   console.log(user);
  //   return (
  //     <div
  //       className="grayBackdrop"
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //       }}
  //     >
  //       <h2 style={{ fontWeight: '300', position: 'absolute', top: '10%' }}>
  //         Welcome, {user.email}
  //       </h2>
  //       <h1
  //         className="quizh1"
  //         style={{
  //           color: '#6F717A',
  //           fontSize: '300%',
  //           top: '40%',
  //           position: 'absolute',
  //         }}
  //       >
  //         Bras that fit you are out there.
  //       </h1>
  //       <h1
  //         className="quizh1"
  //         style={{ fontSize: '300%', top: '50%', position: 'absolute' }}
  //       >
  //         We'll help you find them.
  //       </h1>
  //       <Button
  //         variant="outlined"
  //         size="small"
  //         style={{
  //           height: '5%',
  //           textAlign: 'center',
  //           textTransform: 'capitalize',
  //           position: 'absolute',
  //           color: 'white',
  //           background: 'black',
  //           paddingLeft: '3%',
  //           paddingRight: '3%',
  //           top: '80%',
  //           weight: '400',
  //           height: '6%',
  //         }}
  //       >
  //         <Link href={'/question'}>Start the Quiz</Link>
  //       </Button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div
  //       className="grayBackdrop"
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //       }}
  //     >
  //       <h2 style={{ fontWeight: '300', position: 'absolute', top: '10%' }}>
  //         Welcome, User
  //       </h2>
  //       <h1
  //         className="quizh1"
  //         style={{
  //           color: '#6F717A',
  //           fontSize: '300%',
  //           top: '40%',
  //           position: 'absolute',
  //         }}
  //       >
  //         Bras that fit you are out there.
  //       </h1>
  //       <h1
  //         className="quizh1"
  //         style={{ fontSize: '300%', top: '50%', position: 'absolute' }}
  //       >
  //         We'll help you find them.
  //       </h1>
  //       <Button
  //         variant="outlined"
  //         size="small"
  //         style={{
  //           height: '5%',
  //           textAlign: 'center',
  //           textTransform: 'capitalize',
  //           position: 'absolute',
  //           color: 'white',
  //           background: 'black',
  //           paddingLeft: '3%',
  //           paddingRight: '3%',
  //           top: '80%',
  //           weight: '400',
  //           height: '6%',
  //         }}
  //       >
  //         <Link href={'/question'}>Start the Quiz</Link>
  //       </Button>
  //     </div>
  //   );
  // }
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FAF8F1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          margin: '0',
          padding: '0',
          fontFamily: 'tempios family',
          fontStyle: 'italic',
          fontWeight: '400',
          width: '30%',
          textAlign: 'center',
          marginBottom: '20%',
        }}
      >
        Bras that fit you are out there. We&apos;ll help you find them.
      </h1>
      <Button
        variant="filled"
        size="small"
        style={{
          height: '5%',
          textAlign: 'center',
          textTransform: 'capitalize',
          position: 'absolute',
          color: 'white',
          background: '#670224',
          paddingLeft: '3%',
          paddingRight: '3%',
          weight: '400',
          height: '5%',
        }}
      >
        <Link href={'/quizIntro'}>Start the Quiz</Link>
      </Button>
    </div>
  );
}
