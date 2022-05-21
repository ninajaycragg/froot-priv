import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useRouter } from 'next/router';

export default function Signup() {
  const [suEmail, setsuEmail] = useState('');
  const [suPass, setsuPass] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, suEmail, suPass)
      .then((userCredential) => {
        router.push('/quiz');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div
      className="grayBackdrop"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h4
        style={{
          margin: '0',
          fontWeight: '400',
          textAlign: 'center',
          position: 'absolute',
          top: '12%',
        }}
      >
        Sign up for Froot
      </h4>
      <input
        type="text"
        placeholder="email"
        className="signupInput"
        style={{
          top: '24%',
        }}
        onChange={(e) => {
          setsuEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        className="signupInput"
        style={{
          top: '34%',
        }}
        onChange={(e) => {
          setsuPass(e.target.value);
        }}
      />
      {/* <input
        type="text"
        placeholder="age"
        className="signupInput"
        style={{
          top: '44%',
        }}
        onChange={(e) => {
          setsuAge(e.target.value);
        }}
      /> */}
      <Button
        variant="outlined"
        style={{
          color: 'white',
          background: 'black',
          textTransform: 'capitalize',
          width: '30%',
          height: '6%',
          borderRadius: '5px',
          position: 'absolute',
          top: '56%',
        }}
        onClick={handleSubmit}
      >
        Create your Account
      </Button>
    </div>
  );
}
