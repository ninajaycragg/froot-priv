import React, { useState } from 'react';
import Button from '@mui/material/Button';
// 29 questions

export default function Question1() {
  const [index, setIndex] = useState(0);
  const [sel, setSel] = useState(null);
  const [answers, setAnswers] = useState([]);

  const questionsArray = [
    {
      question: 'What is your name?',
      subtext: true,
      text: 'It can be a nickname or a name you preferred to be called',
      type: 'text',
    },
    {
      question: 'What is your email?',
      subtext: true,
      text: 'We want to give you your results and keep you in the loop!',
      type: 'text',
    },
    {
      question: 'How old are you?',
      subtext: false,
      type: 'text',
    },
    {
      question: 'You currently identify as...',
      subtext: true,
      text: 'You can write in "woman", "man", "non-binary", or however you self-identify. Gender plays a factor in the bra fitting process and we go in-depth on our website.',
      type: 'text',
    },
    {
      question: 'Are you currently pregnant or breastfeeding?',
      subtext: true,
      text: 'Your breasts change during this time. We want to make sure we consider these changes.',
      type: 'mc',
      options: ['Breastfeeding', 'Pregnant', 'Neither'],
    },
    {
      question: 'If you have had your breasts augmented, what was it for?',
      subtext: true,
      text: 'If not, write N/A',
      type: 'text',
    },
    {
      question:
        'Any medical concerns regarding your breasts that you would like us to know?',
      subtext: true,
      text: 'If not, write N/A',
      type: 'text',
    },
    {
      question: 'Any fabric or material you are allergic to?',
      subtext: true,
      text: 'Separate your answers with a comma. If none come to mind, write "N/A"',
      type: 'text',
    },
    {
      question: 'Do you have sensitive skin?',
      subtext: false,
      type: 'mc',
      options: ['Yes', 'No'],
    },
    {
      question: 'Figuring Out Your Style',
      subtext: true,
      text: 'Knowing the shape and size of your breasts is critical. But, we also want to buy you bras you enjoy looking at.',
      type: 'break',
    },
    {
      question: 'What types of bras are you looking for?',
      subtext: true,
      text: 'We offer a lot of choices. Please pick as many as you like! Read more about each type on our website!',
      type: 'mc',
      options: [
        'Push up - Pulls breasts upward then inward bringing breasts closer',
        'Front Fastening - Opens in the front',
        'Balconette - Bra lifts boobs upwards not inwards',
        'Tube - A strapless strip of stretchy fabric with a thick band on top and bottom',
        'T-shirt - Smooth cup bra, usually underwired, that has padded or molded cups',
        'Sports Bra - Keeps breasts firmly placed and restricts movement in their muscle ligaments',
      ],
    },
    {
      question: "What's style(s) do you want your bras to have?",
      subtext: true,
      text: 'Pick as many as you like!',
      type: 'mc',
      options: [
        'Romantic - Lots of Lace',
        'Minimalist - Super Simple',
        'Sport - Splash of Colors and Possibly A Logo',
        'Vintage - Shape and Structure remind us of Past Decades',
        'Modern - A Twist to the Classic',
        'Classic - Shape of a Typical Bra',
      ],
    },
    {
      question: 'Pick the colors you would like for your bra(s)',
      subtext: true,
      text: 'Select as many as you want!',
      type: 'mc',
      options: [
        'Skin Tones',
        'Warm',
        'Blacks',
        'Pink and Blue',
        'Cold',
        'Bright Yellows',
        'Whites',
      ],
    },
    {
      question:
        'Out of the color palettes, which colors do you want specifically?',
      subtext: true,
      text: 'If you have no particular colors in mind, just say "surprise me"!',
      type: 'text',
    },
    {
      question: 'Do you want your bras to have underwire or not?',
      subtext: true,
      text: 'Underwire bras do provide a bit more support, structure, and shape. Yet some feel the wireless bra is more comfortable. Ultimately, the choice is yours. If you need help with your choice, we have just the article for you.',
      type: 'mc',
      options: [
        'All my bras should be underwire!',
        'Would like to see some bras with underwire',
        'No underwire whatsoever',
      ],
    },
    {
      question: 'Do you want padding?',
      subtext: true,
      text: 'Padding can be for support or to make you look bustier. Most bras can have padding. But, we want to know your thoughts on padding. If you want some more clarity on padding, check out our article.',
      type: 'mc',
      options: [
        'No padding for my bras',
        'Some bras should have padding',
        'All my bras should have padding!',
      ],
    },
    {
      question:
        'Anything you want us to know regarding how you want your bras to look like?',
      subtext: false,
      type: 'text',
    },
    {
      question: 'Factors Beyond Size Measuring',
      subtext: true,
      text: 'Before we measure you, there are a few other factors regarding your boobs the Froot team must ask about to find the best bra(s) for you. We explain these factors in-depth on our website.',
      type: 'break',
    },
    {
      question: 'What is your current bra size?',
      subtext: true,
      text: 'Bra sizes consist of the cup and bandwidth (for example, 32C). If you do not know your bra size, feel free to say "not sure".',
      type: 'text',
    },
    {
      question: 'What is your breast fullness (top or bottom)?',
      subtext: true,
      text: "Your nipples' location on your breasts indicates where most of your breast tissue is location. Pick the image that best represents your breasts. If you want more info regarding fullness, check out our article.",
      type: 'mc',
      options: [
        'Full on Bottom - Nipples are Above Dotted Line',
        'Full on Top - Nipples are Below Dotted Line',
      ],
    },
    {
      question: 'What is your breast fullness (outer or inner)?',
      subtext: true,
      text: "Your nipples' location on your breasts indicates where most of your breast tissue is located. Pick the image that best represents your breasts. If you want more info regarding fullness, check out our article.",
      type: 'mc',
      options: [
        'Outer Fullness - Nipples are Towards each other',
        'Inner Fullness - Nipples are Opposite of Each Other',
      ],
    },
    {
      question: 'Are your boobs soft or firm?',
      subtext: true,
      text: 'Use your fingers to tape on one of your breasts. Watch if your breast ripples in response to your touch. The results will determine the softness or firmness of your breast tissue. Breast firmness or softness may change',
      type: 'mc',
      options: [
        'Super Soft - Fingers do not bounce back but a slight crater is made in your skin in response to the touch of your finger',
        'Soft - Finger does not bounce back and the ripple is super quick yet still noticeable',
      ],
    },
    {
      question:
        'Laying your hand on your chest, how many fingers fit between your breasts without touching?',
      subtext: true,
      text: 'Use your fingers to measure the space between your breast as shown in the image on the right.',
      type: 'mc',
      options: ['0', '1', '2', '3 or more'],
    },
    {
      question: 'Measuring Your Breasts',
      subtext: true,
      text: 'For this portion of our quiz, you will need to be in a private setting in order to complete your self-sizing. All measurements should be taken on naked breasts. We will provide instructional videos for each step. Please take your soft measuring tape provided in the packaging and input your measurements according to the question. Please use inches when measuring. This will take about five minutes. Your responses are confidential.',
      type: 'break',
    },
    {
      question: 'Measure your under bust loosely (in inches)',
      subtext: true,
      text: 'Sitting down, measure right underneath your breasts as depicted in the image. The tape should NOT dig in at all.',
      type: 'text',
    },
    {
      question: 'Measure your under bust (in inches)',
      subtext: true,
      text: 'Sitting down, measure right underneath your breast as depicted in the image. The tape should dig in a little, the tape should be as snug as you want the bra to be.',
      type: 'text',
    },
    {
      question: 'Measure your under bust tightly (in inches)',
      subtext: true,
      text: 'Sitting down, measure right underneath your breast as depicted in the first image. The tape should be as tight as possible.',
      type: 'text',
    },
    {
      question: 'Measure your standing bust (in inches)',
      subtext: true,
      text: 'Stand up straight and measure loosely around the fullest part of your breasts as depicted in the image.',
      type: 'text',
    },
    {
      question: 'Measure your bust while you lean over (in inches)',
      subtext: true,
      text: 'Bend over at a 90-degree angle and measure loosely around the fullest part of your breasts as depicted in the image.',
      type: 'text',
    },
    {
      question: 'Measure your bust while you lie on the ground (in inches)',
      subtext: true,
      text: 'Lie on your back and measure loosely around the fullest part of your breasts as depicted in the image below.',
      type: 'text',
    },
    {
      question: 'All done!',
      subtext: false,
      type: 'break',
    },
  ];

  async function postUser() {
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newUser = {
      questions: answers,
    };

    await fetch('http://localhost:5000/user/add', {
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
    setAnswers([...answers, sel]);
    if (index < answers.length) {
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
  };

  const handleChoose = (i) => {
    if (i !== sel) {
      setSel(i);
    }
  };

  const handleBack = () => {
    setIndex((index -= 1));
    setSel(answers[index]);
  };

  return (
    <div
      style={{
        backgroundColor: '#F2F2F2',
        paddingBottom: '20%',
        width: '100vw',
        height: '200vh',
      }}
    >
      <div
        style={{
          textAlign: 'left',
          width: '60%',
          marginLeft: '20%',
          paddingTop: '3%',
          marginBottom: '2%',
        }}
      >
        <h1 style={{ fontSize: '150%' }}>{questionsArray[index].question}</h1>
        <p>{questionsArray[index].subtext ? questionsArray[index].text : ''}</p>
      </div>

      {questionsArray[index].type === 'text' ? (
        <div
          style={{
            width: '60%',
            marginLeft: '20%',
          }}
        >
          <input
            onChange={handleChange}
            value={sel}
            style={{
              width: '30%',
              padding: '1.5%',
              borderRadius: '5px',
              border: '1px solid black',
              marginBottom: '3%',
            }}
            type="text"
          />
        </div>
      ) : null}

      {questionsArray[index].type === 'mc' ? (
        <div
          style={{
            marginLeft: '10%',
            width: '80%',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
          }}
        >
          {questionsArray[index].options.map((choices) => (
            <div
              onClick={() => handleChoose(choices)}
              style={{ height: '380px', margin: '1%', width: '220px' }}
            >
              <div
                id={choices}
                style={
                  sel === choices
                    ? { backgroundColor: 'red' }
                    : { backgroundColor: 'black' }
                }
                className="questionTop"
              >
                <div className="questionContent "></div>
              </div>
              <div className="questionBottom">
                <h3 className="questionh3">{choices.split('-')[0]}</h3>
                <h5 className="questionh5">{choices.split('-')[1]}</h5>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'left',
          width: '60%',
          marginLeft: '20%',
          marginBottom: '5%',
        }}
      >
        {index === 0 ? null : (
          <Button
            onClick={handleBack}
            variant="filled"
            style={{
              borderRadius: '2px',
              width: '20%',
              backgroundColor: 'black',
              color: 'white',
              padding: '1%',
            }}
          >
            back
          </Button>
        )}
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
          <Button
            onClick={handleClick}
            variant="filled"
            style={{
              borderRadius: '2px',
              width: '20%',
              backgroundColor: 'black',
              color: 'white',
              padding: '1%',
            }}
          >
            Next Question
          </Button>
        )}
      </div>

      {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div onClick={() => handleChoose('a')}>
          <div
            id="1"
            style={
              sel === 'a'
                ? { backgroundColor: 'red' }
                : { backgroundColor: 'black' }
            }
            className="questionTop"
          >
            <div className="questionContent "></div>
          </div>
          <div className="questionBottom">
            <h3 className="questionh3"></h3>
            <h5 className="questionh5">{questionsArray[index].option1}</h5>
          </div>
        </div>
        <div onClick={() => handleChoose('b')}>
          <div
            className="questionTop"
            style={
              sel === 'b'
                ? { backgroundColor: 'red' }
                : { backgroundColor: 'black' }
            }
          >
            <div className="questionContent"></div>
          </div>
          <div className="questionBottom">
            <h3 className="questionh3"></h3>
            <h5 className="questionh5">{questionsArray[index].option2}</h5>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {index === 4 ? (
          ''
        ) : (
          <button onClick={handleClick}>next question</button>
        )}
        {index === 0 || index === 4 ? (
          ''
        ) : (
          <button onClick={handleBack}>back</button>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '10%',
        }}
      >
        <div onClick={() => handleChoose('c')}>
          <div
            className="questionTop"
            style={
              sel === 'c'
                ? { backgroundColor: 'red' }
                : { backgroundColor: 'black' }
            }
          >
            <div className="questionContent"></div>
          </div>
          <div className="questionBottom">
            <h3 className="questionh3"></h3>
            <h5 className="questionh5">{questionsArray[index].option3}</h5>
          </div>
        </div>
        <div onClick={() => handleChoose('d')}>
          <div
            className="questionTop"
            style={
              sel === 'd'
                ? { backgroundColor: 'red' }
                : { backgroundColor: 'black' }
            }
          >
            <div className="questionContent"></div>
          </div>
          <div className="questionBottom">
            <h3 className="questionh3"></h3>
            <h5 className="questionh5">{questionsArray[index].option4}</h5>
          </div>
        </div>
      </div> */}
      <div>
        <button onClick={postUser}>post user</button>
      </div>
    </div>
  );
}
