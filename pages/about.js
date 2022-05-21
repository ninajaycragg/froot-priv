import React from 'react';

export default function About() {
  return (
    <div>
      <div className="grayBackdrop">
        <div
          style={{
            background: 'black',
            width: '50%',
            height: '700px',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: 'white',
              width: '50%',
              height: '360px',
              borderRadius: '8px',
            }}
          ></div>
        </div>
        <div>
          <h4
            style={{
              margin: '0',
              width: '30%',
              position: 'absolute',
              top: '40%',
              right: '7%',
              fontSize: '130%',
            }}
          >
            Who we are
          </h4>
          <p
            style={{
              margin: '0',
              width: '30%',
              position: 'absolute',
              top: '50%',
              right: '7%',
            }}
          >
            Description of Froot team, how we got started, etc. Lorem ipsum
            dolor sit amet. Description of Froot team, how we got started, etc.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div
        className="threeRectContainer"
        style={{
          marginTop: '10%',
        }}
      >
        <div>
          <div className="questionTop">
            <div className="questionContent"></div>
          </div>
          <div className="aboutBottom">
            <h3 className="questionh3">Team Member</h3>
            <h5 className="questionh5">Their role</h5>
          </div>
        </div>
        <div>
          <div className="questionTop">
            <div className="questionContent"></div>
          </div>
          <div className="aboutBottom">
            <h3 className="questionh3">Team Member</h3>
            <h5 className="questionh5">Their role</h5>
          </div>
        </div>
        <div>
          <div className="questionTop">
            <div className="questionContent"></div>
          </div>
          <div className="aboutBottom">
            <h3 className="questionh3">Team Member</h3>
            <h5 className="questionh5">Their role</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
