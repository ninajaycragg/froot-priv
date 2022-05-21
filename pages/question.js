import React, { useState } from 'react';
import { auth } from '../firebase-config';

export default function Question() {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [display, setDisplay] = useState(false);
  const [dummyResult, setResult] = useState('');

  const user = auth.currentUser;

  const handleClick = (event) => {
    event.preventDefault();
    postUser();
    setResult(parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4));
    setDisplay(true);
  };

  async function postUser() {
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newUser = {
      email: user.email,
      firebaseID: user.uid,
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
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
  if (user) {
    return (
      <div className="grayBackdrop">
        <h1
          id="questionh1"
          style={{
            margin: '0',
            fontWeight: '400',
            fontSize: '180%',
            textAlign: 'center',
            paddingTop: '5%',
          }}
        >
          Question goes here
        </h1>
        <div
          className="threeRectContainer"
          style={{
            marginTop: '4%',
          }}
        >
          <div className="eachQuestion">
            <div className="questionTop">
              <div className="questionContent"></div>
            </div>
            <div className="questionBottom">
              <h3 className="questionh3">Option</h3>
              <h5 className="questionh5">Description</h5>
            </div>
          </div>
          <div className="eachQuestion">
            <div className="questionTop">
              <div className="questionContent"></div>
            </div>
            <div className="questionBottom">
              <h3 className="questionh3">Option</h3>
              <h5 className="questionh5">Description</h5>
            </div>
          </div>
          <div className="eachQuestion">
            <div className="questionTop">
              <div className="questionContent"></div>
            </div>
            <div className="questionBottom">
              <h3 className="questionh3">Option</h3>
              <h5 className="questionh5">Description</h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grayBackdrop">
        <h1
          id="questionh1"
          style={{
            margin: '0',
            fontWeight: '400',
            fontSize: '180%',
            textAlign: 'center',
            paddingTop: '5%',
          }}
        >
          Question goes here
        </h1>
        <p style={{ textAlign: 'center' }}>
          Description of the question goes here. Here is some info on the
          question
        </p>
        <div
          className="threeRectContainer"
          style={{
            marginTop: '4%',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <div className="questionTop">
                <div className="questionContent"></div>
              </div>
              <div className="questionBottom">
                <h3 className="questionh3">Option</h3>
                <h5 className="questionh5">Description</h5>
              </div>
            </div>
            <div>
              <div className="questionTop">
                <div className="questionContent"></div>
              </div>
              <div className="questionBottom">
                <h3 className="questionh3">Option</h3>
                <h5 className="questionh5">Description</h5>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <div className="questionTop">
                <div className="questionContent"></div>
              </div>
              <div className="questionBottom">
                <h3 className="questionh3">Option</h3>
                <h5 className="questionh5">Description</h5>
              </div>
            </div>
            <div>
              <div className="questionTop">
                <div className="questionContent"></div>
              </div>
              <div className="questionBottom">
                <h3 className="questionh3">Option</h3>
                <h5 className="questionh5">Description</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
