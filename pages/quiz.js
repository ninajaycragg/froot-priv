import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '../firebase-config';

export default function Quiz() {
  return (
    <div
      className="start-wrapper"
    >
      <img className="start-image" src="/pizza.svg"></img>
      <div
        className="start-text-wrapper"
      >
        <div className="general" style={{ justifyContent: 'left' }}>
          <p
            className="start-header"
          >
            THE FROOT EXPERIENCE
          </p>
          <Image src="/sparkles.gif" width="20%" height="20%"></Image>
        </div>
        <hr className="start-line" />
        <h1
          className="start-description"
        >
          Bras that fit you are out there. We&apos;ll help you find them.
        </h1>
        <Button
          variant="filled"
          size="small"
          className="start-button"
        >
          <Link href={'/quizIntro'}>Start the Quiz</Link>
        </Button>
      </div>
    </div>
  );
}
