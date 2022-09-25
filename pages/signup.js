import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useRouter } from 'next/router';
import globalVal from "./global";

export default function Signup() {
  const [suEmail, setsuEmail] = useState('');
  const [suPass, setsuPass] = useState('');
  const router = useRouter();

  const signupUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, suEmail, suPass)
      .then((userCredential) => {
        // Create a mongodb user to save other user data
        const newUser = {
          firebaseUID: userCredential.user.uid,
          email: suEmail,
          questions: null,
        };

        globalVal.firebaseUID = userCredential.user.uid;

        fetch('http://localhost:5001/user/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        }).catch((error) => {
          window.alert(error);
          return;
        });
        router.push('/quiz');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        switch (errorCode) {
          case 'auth/email-already-in-use':
            window.alert(`${suEmail} is already in use.`);
            break;
          case 'auth/invalid-email':
            window.alert(`Email address ${suEmail} is invalid.`);
            break;
          case 'auth/missing-email':
            window.alert("Please enter a valid email address.");
            break;
          case 'auth/operation-not-allowed':
            window.alert(`Error during sign up.`);
            break;
          case 'auth/weak-password':
            window.alert('Password is not strong enough. Add additional characters including special characters and numbers.');
            break;
          default:
            window.alert(errorMessage);
            break;
        }
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
        onClick={signupUser}
      >
        Create your Account
      </Button>
    </div>
  );
}
