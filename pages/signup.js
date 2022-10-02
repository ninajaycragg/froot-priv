import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useRouter } from 'next/router';
import { positions } from '@mui/system';
import { Padding } from '@mui/icons-material';
import { autocompleteClasses } from '@mui/material';

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
        //backgroundColor: 'green',
        display: 'flex',
        backgroundColor: '#FAF8F1',
      }}
    >
      <div
        style={{
            marginTop: '15%',
            width: '100%',
            height: '100%',
            //backgroundColor: 'orange',
            display: 'flex'
            
          }}
      >
        <div
          style={{
            // backgroundColor: 'red',
            width: '50%',
            height: '60%',
            //display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <div
          style={{
            width: 'auto',
            height: '90%',
            position: 'relative',
            marginLeft: '30%'
          }}
          >
            <Image src="/createAccountImg.svg" layout="fill"></Image>
          </div>
        </div>

        <div
          style={{
            width: '50%',
            height: '60%',
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
                fontSize: '0.875em',
                marginRight: '1%',
              }}
            >
              <b>CREATE ACCOUNT</b>
            </p>
          </div>
          <hr style={{ width: '60%', marginLeft: '0', marginBottom: '3%' }} />

          <form
            onSubmit={handleSubmit}
            style={{
              width: '60%',
              marginLeft: '0',
              marginBottom: '10%',
              fontFamily: 'Inter',
              //fontSize: '70%',
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
                  border: '1px solid',
                  borderRadius: '5px',
                  fontSize: '1.125em',
                  boxSizing: 'border-box',
                  backgroundColor: '#FAF8F1',
                  height: '15%',
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
                  border: '1px solid',
                  borderRadius: '5px',
                  fontSize: '1.125em',
                  boxSizing: 'border-box',
                  backgroundColor: '#FAF8F1',
                  height: '15%',
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
                  border: '1px solid',
                  borderRadius: '5px',
                  fontSize: '1.125em',
                  boxSizing: 'border-box',
                  backgroundColor: '#FAF8F1',
                  height: '15%',
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
                  border: '1px solid',
                  borderRadius: '5px',
                  fontSize: '1.125em',
                  boxSizing: 'border-box',
                  backgroundColor: '#FAF8F1',
                  height: '15%',
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
                  border: '1px solid',
                  borderRadius: '5px',
                  fontSize: '1.125em',
                  boxSizing: 'border-box',
                  backgroundColor: '#FAF8F1',
                  height: '15%',
                  width: '100%',
                  marginBottom: '5%',
                  paddingLeft: '5%',
                  paddingRight: '5%'
                }}
              />
            </label>
            <br></br>

            <label
              style={{
                fontSize: '0.875em',
                lineHeight: '200%',
                verticalAlign: 'bottom',
              }}
            >
              <input
                type="checkbox"
                name="agree"
                value={inputs.agree || ""}
                onChange={handleChange}
                // style={{
                //   lineHeight: '200%',
                //   verticalAlign: 'bottom',
                // }}
                
              />
              I agree with Froot's Terms, Privacy Policy, and E-sign consent.
            </label>
            <br></br>
            <br></br>
            
            <div
              style={{
                display: 'flex',
                height: '15%',
                width: '100%',
              }}
            >
              <div>
                <input
                  type="submit"
                  value={"Create Account"}
                  variant="filled"
                  size="small"
                  style={{
                    padding: '15px 40px',
                    fontSize: '0.875em',
                    height: '100%',
                    borderRadius: '5px',
                    background: '#670224',
                    color: 'white',
                    boxSizing: 'border-box',
                    width: '100%',
                    marginBottom: '5%',
                    lineHeight: '100%',
                    fontFamily: 'Inter',
                    border: '0px'

                  }}
                />
              </div>
             
              <div
                style={{
                  flexDirection: 'column',
                  width: '5%'
                }}
              ></div>

              <div
                style={{
                  flexDirection: 'column',
                }}
              >
                <Image 
                  src="/sparkles.gif"
                  height="50%"
                  width="50%"
                >
                </Image>
              </div>

            </div>
          </form>

        </div>

      </div>
    </div>
  )
}