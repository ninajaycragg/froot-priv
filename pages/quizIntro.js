import React, { useEffect } from 'react';
import Image from 'next/image'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function QuizIntro() {
  const router = useRouter();
  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter') {
        event.preventDefault();
        handleClick();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  const handleClick = () => {
    router.push('/question1');
  };
  return (
    <div className="quizIntro-body">
      <div className="quizIntro-container">
        <div className="quizIntro-title-wrapper">
          <Image src="/sparkles.gif" height="50%" width="50%"></Image>
          <h1 className="quizIntro-title">
            &nbsp;Welcome to Froot&nbsp;
          </h1>
          <Image src="/sparkles.gif" height="50%" width="50%"></Image>
        </div>
        <p className="quizIntro-text">
          The following questionnaire helps our team at Froot best understand your size, desired fit, and style. Please take this test in a private and comfortable setting as you will have to undress for the self-sizing portion of our quiz.
        </p>
        <div className="quizIntro-button-wrap"
        >
          <Button
            onClick={handleClick}
            variant="outlined"
            className="quizIntro-button"
          >
            START
          </Button>

          <h1 className="quizIntro-enter">
            press <b>Enter</b>
          </h1>
        </div>
      </div>
    </div>
  );
}
