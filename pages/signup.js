import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useRouter } from 'next/router';
import { positions } from '@mui/system';
import { Padding } from '@mui/icons-material';

export default function Signup() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }



  return (
    <div
      className="general"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FAF8F1',
      }}
    >

      <div
        style={{
          // backgroundColor: 'red',
          width: '50%',
          height: '75%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <Image src="/createAccountImg.svg" layout="fill"></Image>
      </div>

      <div
        style={{
          width: '50%',
          height: '75%',
          display: 'flex',
          flexDirection: 'column',
          // backgroundColor: 'blue'
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
            <b>CREATE ACCOUNT</b>
          </p>
        </div>
        <hr style={{ width: '60%', marginLeft: '0', marginBottom: '5%' }} />

        <form
          onSubmit={handleSubmit}
          style={{
            width: '60%',
            marginLeft: '0',
            marginBottom: '10%',
            // backgroundColor: 'red',
            fontFamily: 'Inter',
            fontSize: '70%',

          }}
        >

          <label>
            <input
              type="email"
              placeholder='Enter Email Here'
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              style={{
                boxSizing: 'border-box',
                height: '20%',
                width: '100%',
                marginBottom: '5%',
                paddingLeft: '5%',
                paddingRight: '5%'
              }}
            />
          </label>
          <br></br>

          <label>
            <input
              type="text"
              placeholder='First Name'
              name="firstName"
              value={inputs.firstName || ""}
              onChange={handleChange}
              style={{
                boxSizing: 'border-box',
                height: '20%',
                width: '100%',
                marginBottom: '5%',
                paddingLeft: '5%',
                paddingRight: '5%'
              }}
            />
          </label>
          <br></br>

          <label>
            <input
              type="text"
              placeholder='Last Name'
              name="lastName"
              value={inputs.lastName || ""}
              onChange={handleChange}
              style={{
                boxSizing: 'border-box',
                height: '20%',
                width: '100%',
                marginBottom: '5%',
                paddingLeft: '5%',
                paddingRight: '5%'
              }}
            />
          </label>
          <br></br>

          <label>
            <input
              type="password"
              placeholder='Password'
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              style={{
                boxSizing: 'border-box',
                height: '20%',
                width: '100%',
                marginBottom: '5%',
                paddingLeft: '5%',
                paddingRight: '5%'
              }}
            />
          </label>
          <br></br>

          <label>
            <input
              type="password"
              placeholder='Confirm Password'
              name="confirmPassword"
              value={inputs.confirmPassword || ""}
              onChange={handleChange}
              style={{
                boxSizing: 'border-box',
                height: '20%',
                width: '100%',
                marginBottom: '5%',
                paddingLeft: '5%',
                paddingRight: '5%'
              }}
            />
          </label>
          <br></br>

          <label>
            <input
              type="checkbox"
              name="agree"
              value={inputs.agree || ""}
              onChange={handleChange}
            />
            I agree with Froot's Terms, Privacy Policy, and E-sign consent.
          </label>
          <br></br>

          <div>
            <input
              type="submit"
              value={"Create Account"}
              variant="filled"
              size="small"
              style={{
                width: '40%',
                height: '100%',
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
                background: '#670224',
                paddingLeft: '3%',
                paddingRight: '3%',
                weight: '400',
              }}
            />

            <Image src="/sparkles.gif" width="20%" height="20%"></Image>
          </div>
        </form>

      </div>
    </div>
  )
}
