import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ButtonBase from '@mui/material/ButtonBase';

// 27 questions
let tog = 1

export default function Question1() {
  const [index, setIndex] = useState(0);
  const [sel, setSel] = useState('');
  const [answers, setAnswers] = useState([]);
  const [multAnswers, setMult] = useState([]);
  let router = useRouter();

  const questionsArray = [
    {
      question: 'Figuring out your style',
      subtext: true,
      text: "The Froot team realizes that knowing a bit about who you are, not just your boobs, can help us find your perfect bra. So let's get to know you with a few key questions!",
      type: 'break',
      select: 'one',
    },
  ];

  async function postUser() {
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newUser = {
      questions: answers,
    };
    // ('https://froot-priv-83didmdgb-maarywang.vercel.app/user/add');
    // ('http://localhost:5000/user/add');
    // http://localhost:3000/api/hello
    await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(newUser),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }
  async function postBlog() {
    // When a post request is sent to the create url, we'll add a new record to the database.
    const post = {
      title: 'teehee',
      content: 'testContent',
    };
    // ('https://froot-priv-83didmdgb-maarywang.vercel.app/user/add');
    // ('http://localhost:5000/user/add');
    // http://localhost:3000/api/hello
    await fetch('http://localhost:5000/blogPosts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(post),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  // const postUser = async () => {
  //   const newUser = {
  //     questions: answers,
  //   };
  //   const res = await fetch('https://api.vercel.com/api/hello', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newUser),
  //   });
  //   console.log(res);
  // };

  const handleChange = (e) => {
    setSel(e.target.value);
  };

  const handleClick = () => {
    router.push("/questions");
  };

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

  const handleChoose = (i) => {
    if (questionsArray[index].select === 'multiple') {
      if (multAnswers.includes(i)) {
        const copy = multAnswers.filter((choice) => choice !== i);
        setMult(copy);
        // setSel(multAnswers);
      } else {
        setMult([...multAnswers, i]);
        // setSel(multAnswers);
      }
    } else if (i !== sel) {
      setSel(i);
    }
  };

  const handleBack = () => {
    setIndex((index -= 1));
    if (questionsArray[index].select === 'multiple') {
      setMult(answers[index]);
      setSel(multAnswers);
    } else {
      setSel(answers[index]);
    }
  };
  //onclick change color: setCSS on click?
  useEffect(() => {
    setSel(multAnswers);
  }, [multAnswers]);
  return (
    <div className="question1-wrapper">
      <img className="hanging-pink-tops" src="hanging-pink-tops.jpeg"></img>
      <div className=
        {
          true ? "question1_body" : null
        }
      >
        <div id="scroll"></div>
        {/* enable back button if index is not 0 */}
        {index === 0 ? null : (
          <Link href="#scroll">
            <Button
              onClick={handleBack}
              variant="outlined"
              className="question_back_button"
              startIcon={<ArrowBackIcon />}
            >
              back
            </Button>
          </Link>
        )}
        {/* Defining first intro question */}
        {/* end */}
        <div className="question_block">
          <div className="question_container">
            <div className="question_container2">
              {/* like the question title */}
              <h1 className="question_title">
                {questionsArray[index].question}
              </h1>
              {/* denotes the paragraph (question body) */}
              <p
                style={{
                  fontFamily: 'Inter',
                }}
              >
                {questionsArray[index].subtext ? questionsArray[index].text : ''}
              </p>
            </div>
            {/* here displays image if available or nothing at all */}
            {questionsArray[index].type === 'textIMG' ||
              questionsArray[index].type === 'mcIMG' ? (
              <div className="question_text_images_container">
                <Image
                  src={questionsArray[index].image}
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
            ) : null}
          </div>
          {/* displays question text or nothing */}
          {questionsArray[index].type === 'text' ||
            questionsArray[index].type === 'textIMG' ? (
            <div className="question_text_options_container"
            >
              <TextField
                onChange={handleChange}
                value={sel}
                id="standard-basic"
                input="text"
                variant="standard"
                placeholder="Type your answer here..."
                className="question_text_box"
              />
            </div>
          ) : null}
          <div className={
            questionsArray[index].type === 'break'
              ? "question_break_container"
              : "question_no_break_container"
          }
          >
            <div className="question_next_container">
              <Link href="#scroll">
                <Button
                  onClick={handleClick}
                  variant="outlined"
                  className="question_next_button"
                  endIcon={<CheckIcon />}
                >
                  OK
                </Button>
              </Link>

              <h1 className="question_next_enter"
              >
                press <b>Enter</b>
              </h1>
            </div>
          </div>

          {/* <div>
          <button onClick={postUser}>post user</button>
        </div>
        <div>
          <button onClick={postBlog}>post blog</button>
        </div> */}
        </div>
      </div >
    </div>
  );
}
