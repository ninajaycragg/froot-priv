import React from 'react';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function Footer() {
  const router = useRouter();
  if (router.pathname === '/quizIntro') {
    return (<></>);
  }
  else if (router.pathname === '/question1' || router.pathname === '/questions') {
    return (<></>);
  } else {
    return (
      <div className="footer_container">
        <div className="footer">
          <div className="general" style={{ width: '50%', height: '100%' }}>
            <div className="column" style={{ height: '100%', width: '25%' }}>
              <div style={{ marginBottom: '5%', display: 'flex' }}>
                <Image src="/logo.svg" width="19rem" height="19rem"></Image>
                <h1
                  className="neutralize"
                  style={{
                    fontFamily: 'Tempios Headline',
                    fontWeight: '300',
                    fontStyle: 'italic',
                  }}
                >
                  &nbsp;Froot
                </h1>
              </div>
              <p
                className="neutralize"
                style={{ fontFamily: 'Inter', fontSize: '80%' }}
              >
                Based in Los Angeles, CA
              </p>
            </div>
          </div>
          <div
            className="general"
            style={{
              width: '50%',
              justifyContent: 'left',
              height: '100%',
              fontSize: '80%',
            }}
          >
            <div
              className="column"
              style={{
                width: '25%',
                height: '100%',
                fontFamily: 'Inter',
              }}
            >
              <p
                className="neutralize"
                style={{
                  fontWeight: '700',
                  marginBottom: '5%',
                  fontSize: '120%',
                }}
              >
                Company
              </p>
              <p className="neutralize" style={{ marginBottom: '5%' }}>
                Careers
              </p>
              <p className="neutralize" style={{ marginBottom: '5%' }}>
                Privacy Policy
              </p>
            </div>
            <div
              className="column"
              style={{
                width: '25%',
                height: '100%',
                fontFamily: 'Inter',
              }}
            >
              <p
                className="neutralize"
                style={{
                  fontWeight: '700',
                  marginBottom: '5%',
                  fontSize: '120%',
                }}
              >
                Contact
              </p>
              <p className="neutralize" style={{ marginBottom: '5%' }}>
                nina@yourfroot.com
              </p>
            </div>

            <Divider />
          </div>
        </div>
        <div style={{ height: '25px', width: '100%' }}>
          <hr />
        </div>
        <div
          className="column"
          style={{
            height: '25px',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p
            className="neutralize"
            style={{
              fontSize: '75%',
              width: '25%',
            }}
          >
            &copy; 2022 Froot Inc.
          </p>
        </div>
      </div>
    );
  }
}
