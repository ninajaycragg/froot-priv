import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
// 27 questions

export default function Question1() {
  const [index, setIndex] = useState(0);
  const [sel, setSel] = useState('');
  const [answers, setAnswers] = useState([]);
  const [multAnswers, setMult] = useState([]);

  const questionsArray = [
    {
      question: 'Figuring out your style',
      subtext: true,
      text: "The Froot team realizes that knowing a bit about who you are, not just your boobs, can help us find your perfect bra. So let's get to know you with a few key questions!",
      type: 'break',
      select: 'one',
    },
    {
      question: 'What is your name?',
      subtext: true,
      text: 'It can be a nickname or a name you preferred to be called.',
      type: 'text',
      select: 'one',
    },
    {
      question: 'What is your email?',
      subtext: true,
      text: 'We want to give you your results and keep you in the loop!',
      type: 'text',
      select: 'one',
    },
    {
      question: 'How old are you?',
      subtext: true,
      text: 'This helps us understand your breast type.',
      type: 'text',
      select: 'one',
    },
    {
      question: 'What gender do you identify with?',
      subtext: true,
      text: 'Knowing this can help us find the fit that you want most easily.',
      type: 'text',
      select: 'one',
    },
    {
      question: 'Are you currently pregnant or breastfeeding?',
      subtext: true,
      text: 'Your breasts change during this time. We want to make sure we consider these changes.',
      type: 'mc',
      options: ['Breastfeeding', 'Pregnant', 'Neither'],
      select: 'one',
    },
    {
      question: 'If you have had your breasts augmented, what was it for?',
      subtext: true,
      text: 'If not, write "N/A"',
      type: 'text',
      select: 'one',
    },
    {
      question:
        'Any medical concerns regarding your breasts that you would like us to know?',
      subtext: true,
      text: 'If not, "write N/A"',
      type: 'text',
      select: 'one',
    },
    {
      question: 'Any fabric or material you are allergic to?',
      subtext: true,
      text: 'Separate your answers with a comma. If none come to mind, write "N/A"',
      type: 'text',
      select: 'one',
    },
    {
      question: 'Do you have sensitive skin?',
      subtext: true,
      text: 'This can affect what materials we recommend to you.',
      type: 'mc',
      options: ['Yes', 'No'],
      select: 'one',
    },
    {
      question: 'Figuring Out Your Style',
      subtext: true,
      text: 'Knowing the shape and size of your breasts is critical. But we also want to know what bras you actually want to wear.',
      type: 'break',
      select: 'one',
    },
    {
      question: 'What types of bras are you looking for?',
      subtext: true,
      text: 'We offer a lot of choices. Please pick as many as you like! Read more about each type on our website! Choose as many as you like.',
      type: 'image',
      options: [
        'Push-up ~ Pulls breasts upward then inward bringing breasts closer.',
        'Front-fastening ~ Opens in the front.',
        'Balconette ~ Bra lifts boobs upwards not inwards.',
        'Tube ~ A strapless strip of stretchy fabric with a thick band on top and bottom.',
        'T-shirt ~ Smooth cup bra, usually underwired, that has padded or molded cups.',
        'Sports Bra ~ Keeps breasts firmly placed and restricts breast movement.',
        'Strapless ~ Designed to be worn with no shoulder straps.',
        'Plunge ~ Draws your breasts together from the center of the cup.',
        'Multi-way ~ Straps remove or can be reattached to wear with different clothes.',
        'Halter ~ A strap that fits around your neck.',
        'Stick-on ~ A bra without a band or straps that sticks to your breasts.',
        'Nursing ~ Unlatches to expose nipples to breastfeed. It gives extra support.',
        'Racerback ~ Straps cross each other or meet in a "T" shape across the back.',
        'Pasties ~ Small adhesive cups designed to conceal the nipple and areola.',
        "Bralette ~ Unlined, usually doesn't have underwire or lots of padding.",
        'Other ~ You can write in the comments section what this type of bra is.',
      ],
      select: 'multiple',
    },
    {
      question: "What's style(s) do you want your bras to have?",
      subtext: true,
      text: "It's important to understand what you are interested in wearing, aesthetically! Choose as many as you like.",
      type: 'image',
      options: [
        'Romantic ~ Lots of lace.',
        'Minimalist ~ Super simple. Muted Colors.',
        'Sport ~ Splash of colors and possibly a logo.',
        'Vintage ~ Shape and Structure remind us of Past Decades.',
        'Modern ~ Classic with a twist.',
        'Classic ~ Shape of a siimple bra.',
      ],
      select: 'multiple',
    },
    {
      question: 'Pick the colors you would like for your bra(s)',
      subtext: true,
      text: 'This will help us narrow down what colors of bras to recommend. We can always re-adjust this later. Choose as many as you like.',
      type: 'image',
      options: [
        'Skin Tones',
        'Warm',
        'Blacks',
        'Pink and Blue',
        'Cold',
        'Bright Yellows',
        'Whites',
      ],
      select: 'multiple',
    },
    // {
    //   question:
    //     'Out of the color palettes, which colors do you want specifically?',
    //   subtext: true,
    //   text: 'If you have no particular colors in mind, just say "surprise me"!',
    //   type: 'text',
    // },
    {
      question: 'Do you want your bras to have underwire?',
      subtext: true,
      text: 'Underwire bras do provide a bit more support, structure, and shape. Yet some feel the wireless bra is more comfortable. Ultimately, the choice is yours. If you need help with your choice, we have just the article for you.',
      type: 'mc',
      options: ['Yes, all of them', 'Some should', 'None at all'],
      select: 'one',
    },
    {
      question: 'Do you want padding?',
      subtext: true,
      text: 'Padding can be for support or to make you look bustier. Most bras can have padding. But, we want to know your thoughts on padding. If you want some more clarity on padding, check out our article.',
      type: 'mc',
      options: ['Yes, all of them', 'Some should', 'None at all'],
      select: 'one',
    },
    // {
    //   question:
    //     'Anything you want us to know regarding how you want your bras to look like?',
    //   subtext: false,
    //   type: 'text',
    // },
    {
      question: 'Factors Beyond Size Measuring',
      subtext: true,
      text: 'Before we measure you, there are a few other factors regarding your boobs the Froot team must ask about to find the best bra(s) for you. We explain these factors in-depth on our website.',
      type: 'break',
      select: 'one',
    },
    {
      question: 'What is your current bra size?',
      subtext: true,
      text: 'Bra sizes consist of the cup and bandwidth (for example, 32C). If you do not know your bra size, feel free to say "not sure".',
      type: 'text',
      select: 'one',
    },
    {
      question: 'What is your breast fullness (top or bottom)?',
      subtext: true,
      text: "Your nipples' location on your breasts indicates where most of your breast tissue is location. Pick the image that best represents your breasts. If you want more info regarding fullness, check out our article.",
      type: 'image',
      options: [
        'Full on Bottom ~ Nipples are Above Dotted Line.',
        'Full on Top ~ Nipples are Below Dotted Line.',
        'Even Distribution ~ Nipples are at the Dotted Lines.',
      ],
      select: 'one',
    },
    {
      question: 'What is your breast fullness (outer or inner)?',
      subtext: true,
      text: "Your nipples' location on your breasts indicates where most of your breast tissue is located. Pick the image that best represents your breasts. If you want more info regarding fullness, check out our article.",
      type: 'image',
      options: [
        'Outer Fullness ~ Nipples are Towards each other.',
        'Inner Fullness ~ Nipples are Opposite of Each Other.',
        'Even Distribution ~ Nipples are pointed straight forward.',
      ],
      select: 'one',
    },
    {
      question: 'Are your boobs soft or firm?',
      subtext: true,
      text: 'Use your fingers to tape on one of your breasts. Watch if your breast ripples in response to your touch. The results will determine the softness or firmness of your breast tissue. Breast firmness or softness may change',
      type: 'image',
      options: [
        'Soft ~ Fingers do not bounce back, indent is made in your skin in response to finger.',
        'Medium ~ Finger does not bounce back and ripple is super quick yet still noticeable.',
        'Firm ~ No ripple is created and your finger bounces back.',
      ],
      select: 'one',
    },
    {
      question:
        'Lay your hand on your chest, how many fingers fit between your breasts?',
      subtext: true,
      text: 'Use your fingers to measure the space between your breast as shown in the image on the right.',
      type: 'mcIMG',
      image: '/betweenBreasts.svg',
      options: ['0', '1', '2', '3+'],
      select: 'one',
    },
    {
      question: 'Measuring Your Breasts',
      subtext: true,
      text: 'For this portion of our quiz, you will need to be in a private setting in order to complete your self-sizing. All measurements should be taken on naked breasts. We will provide instructional videos for each step. Please take your soft measuring tape provided in the packaging and input your measurements according to the question. Please use inches when measuring. This will take about five minutes. Your responses are confidential.',
      type: 'break',
      select: 'one',
    },
    {
      question: 'Measure your under bust loosely (in inches)',
      subtext: true,
      text: 'Sitting down, measure right underneath your breasts as depicted in the image. The tape should NOT dig in at all.',
      type: 'textIMG',
      image: '/loosely.svg',
      select: 'one',
    },
    {
      question: 'Measure your under bust normally (in inches)',
      subtext: true,
      text: 'Sitting down, measure right underneath your breast as depicted in the image. The tape should dig in a little, the tape should be as snug as you want the bra to be.',
      type: 'textIMG',
      image: '/loosely.svg',
      select: 'one',
    },
    {
      question: 'Measure your under bust tightly (in inches)',
      subtext: true,
      text: 'Sitting down, measure right underneath your breast as depicted in the first image. The tape should be as tight as possible.',
      type: 'textIMG',
      image: '/loosely.svg',
      select: 'one',
    },
    {
      question: 'Measure your standing bust (in inches)',
      subtext: true,
      text: 'Stand up straight and measure loosely around the fullest part of your breasts as depicted in the image.',
      type: 'textIMG',
      image: '/loosely.svg',
      select: 'one',
    },
    {
      question: 'Measure your bust while you lean over (in inches)',
      subtext: true,
      text: 'Bend over at a 90-degree angle and measure loosely around the fullest part of your breasts as depicted in the image.',
      type: 'textIMG',
      image: '/bent.svg',
      select: 'one',
    },
    {
      question: 'Measure your bust while you lie on the ground (in inches)',
      subtext: true,
      text: 'Lie on your back and measure loosely around the fullest part of your breasts as depicted in the image below.',
      type: 'textIMG',
      image: '/laying.svg',
      select: 'one',
    },
    {
      question: 'All done!',
      subtext: false,
      type: 'break',
      select: 'one',
    },
  ];

  const mult = {
    backgroundColor: 'white',
    width: '353px',
    height: '377px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '5px',
  };

  async function postUser() {
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newUser = {
      questions: answers,
    };

    await fetch('https://froot-priv-83didmdgb-maarywang.vercel.app/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  const handleChange = (e) => {
    setSel(e.target.value);
  };

  const handleClick = () => {
    // setAnswers([...answers, sel]);
    if (index <= answers.length) {
      const newAnswers = [...answers];
      newAnswers[index] = sel;
      setAnswers(newAnswers);
      setIndex((index += 1));
      setSel('');
    } else {
      setAnswers([...answers, sel]);
      setIndex((index += 1));
      setSel('');
    }
    if (answers[index]) {
      if (questionsArray[index].select === 'multiple') {
        setMult(answers[index]);
        setSel(multAnswers);
      } else {
        setSel(answers[index]);
      }
    } else {
      if (questionsArray[index].select === 'multiple') {
        setMult([]);
        setSel([]);
      } else {
        setSel('');
      }
    }
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

  useEffect(() => {
    setSel(multAnswers);
  }, [multAnswers]);

  return (
    <div
      style={{
        backgroundColor: '#FAF8F1',
        width: '100vw',
        height: '100vh',
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div id="scroll"></div>
      {index === 0 ? (
        <div
          style={{
            width: '5%',
            height: '40%',
            marginRight: '1%',
            marginTop: '15%',
          }}
        ></div>
      ) : (
        <div
          style={{
            width: '5%',
            height: '40%',
            textAlign: 'right',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            marginRight: '1%',
            marginTop: '15%',
          }}
        >
          <h1
            style={{
              fontFamily: 'Inter',
              fontWeight: '700',
              fontSize: '100%',
              marginTop: '8%',
            }}
          >
            {index + 1}/{questionsArray.length}
          </h1>
          <ArrowForwardIcon style={{ fontSize: '90%', marginTop: '10%' }} />
        </div>
      )}
      <div
        style={{
          width: '726px',
          height: '40%',
          marginTop: '15%',
        }}
      >
        <div
          style={{
            width: '726px',
            display: 'flex',
            justifyContent: 'flex-start',
            height: '35%',
          }}
        >
          <div
            style={{
              textAlign: 'left',
              width: '100%',
            }}
          >
            <h1
              style={{
                fontSize: '150%',
                fontFamily: 'Tiempos Headline',
                fontWeight: '600',
                marginTop: '0',
              }}
            >
              {questionsArray[index].question}
            </h1>
            <p
              style={{
                fontFamily: 'Inter',
              }}
            >
              {questionsArray[index].subtext ? questionsArray[index].text : ''}
            </p>
          </div>
          {questionsArray[index].type === 'textIMG' ||
          questionsArray[index].type === 'mcIMG' ? (
            <div
              style={{
                width: '50%',
                height: '110%',
                position: 'relative',
              }}
            >
              <Image
                src={questionsArray[index].image}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          ) : null}
        </div>

        {questionsArray[index].type === 'text' ||
        questionsArray[index].type === 'textIMG' ? (
          <div
            style={{
              width: '100%',
            }}
          >
            <TextField
              onChange={handleChange}
              value={sel}
              id="standard-basic"
              input="text"
              variant="standard"
              placeholder="Type your answer here..."
              style={{
                width: '100%',
                marginBottom: '5%',
                fontFamily: 'Inter',
                marginTop: '20px',
              }}
            />
          </div>
        ) : null}

        {questionsArray[index].type === 'mc' ||
        questionsArray[index].type === 'mcIMG' ? (
          <div
            style={{
              width: '90%',
              display: 'flex',
              justifyContent: 'flex-start',
              marginBottom: '5%',
              marginTop: '3%',
            }}
          >
            {questionsArray[index].options.map((choices) => (
              <Button
                key={choices}
                id={choices}
                style={
                  sel === choices
                    ? {
                        backgroundColor: '#D0D0D0',
                        color: 'black',
                        width: '25%',
                        marginRight: '3%',
                        textTransform: 'capitalize',
                        fontFamily: 'Inter',
                      }
                    : {
                        backgroundColor: 'white',
                        color: 'black',
                        width: '25%',
                        marginRight: '3%',
                        textTransform: 'capitalize',
                        fontFamily: 'Inter',
                      }
                }
                onClick={() => handleChoose(choices)}
              >
                {choices}
              </Button>
            ))}
          </div>
        ) : null}

        {questionsArray[index].type === 'image' ? (
          <div
            style={{
              width: '100%',
              height: 'auto',
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              alignContent: 'flex-start',
              backgroundColor: '#FAF8F1',
            }}
          >
            {questionsArray[index].options.map((choices) => (
              <div
                onClick={() => handleChoose(choices)}
                key={choices}
                id={choices}
                style={
                  sel === choices ||
                  (questionsArray[index].select === 'multiple' &&
                    multAnswers.includes(choices))
                    ? {
                        backgroundColor: 'white',
                        width: '353px',
                        height: '377px',
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '20px',
                        border: '1px solid black',
                        borderRadius: '5px',
                      }
                    : {
                        width: '353px',
                        height: '377px',
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '20px',
                        border: '1px solid black',
                        borderRadius: '5px',
                      }
                }
              >
                <div
                  style={{
                    width: '313px',
                    height: '246px',
                    position: 'relative',
                  }}
                >
                  <Image src="/testing.png" layout="fill"></Image>
                </div>

                <h3
                  style={{
                    width: '313px',
                    textAlign: 'left',
                    margin: '0',
                    marginTop: '20px',
                    marginBottom: '20px',
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    fontSize: '14px',
                  }}
                >
                  {choices.split('~')[0]}
                </h3>
                <h3
                  style={{
                    width: '313px',
                    textAlign: 'left',
                    fontWeight: '400',
                    margin: '0',
                    padding: '0',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    fontSize: '15px',
                  }}
                >
                  {choices.split('~')[1]}
                </h3>
              </div>
            ))}
          </div>
        ) : null}
        <div
          // style={{
          //   display: 'flex',
          //   justifyContent: 'space-between',
          //   textAlign: 'left',
          //   width: '60%',
          //   paddingBottom: '30%',
          //   marginTop: '3%',
          // }}
          style={
            questionsArray[index].type === 'break'
              ? {
                  display: 'flex',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  width: '60%',
                  paddingBottom: '30%',
                  marginTop: '5%',
                }
              : {
                  display: 'flex',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  width: '60%',
                  paddingBottom: '30%',
                }
          }
        >
          {index === questionsArray.length - 1 ? (
            <Button
              onClick={postUser}
              variant="filled"
              style={{
                borderRadius: '2px',
                width: '20%',
                backgroundColor: 'black',
                color: 'white',
                padding: '1%',
              }}
            >
              Submit
            </Button>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Link href="#scroll">
                <Button
                  onClick={handleClick}
                  variant="filled"
                  style={{
                    borderRadius: '5px',
                    width: '15%',
                    fontFamily: 'Inter',
                    backgroundColor: '#FFFFFF',
                    color: 'black',
                    padding: '1%',
                  }}
                  endIcon={<CheckIcon />}
                >
                  OK
                </Button>
              </Link>

              <h1
                style={{
                  color: '#670224',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  fontSize: '100%',
                  marginLeft: '2%',
                  width: '50%',
                }}
              >
                press <b>Enter</b>
              </h1>
            </div>
          )}
          {index === 0 ? null : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Link href="#scroll">
                <Button
                  onClick={handleBack}
                  variant="filled"
                  style={{
                    borderRadius: '5px',
                    width: '15%',
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '1%',
                    marginRight: '20%',
                    fontFamily: 'Inter',
                  }}
                >
                  back
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div>
          <button onClick={postUser}>post user</button>
        </div>
      </div>
    </div>
  );
}
