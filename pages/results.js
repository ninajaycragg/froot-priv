import React from 'react';

export default function Results() {
  const pStyle = {
    fontWeight: '400',
    fontSize: '75%',
    textAlign: 'left',
    width: '80%',
    position: 'absolute',
    top: '40%',
  };

  const readMoreStyle = {
    fontWeight: '300',
    fontSize: '60%',
    position: 'absolute',
    bottom: '12%',
  };

  const recStyle = {
    fontWeight: '700',
    fontSize: '120%',
    position: 'absolute',
    top: '12%',
  };
  return (
    <div>
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
          Results
        </h1>
        <div className="threeRectContainer" style={{ marginTop: '4%' }}>
          <div>
            <div className="questionTop">
              <div className="questionContent"></div>
            </div>
            <div className="questionBottom">
              <h3 className="questionh3">32D</h3>
              <h5 className="questionh5">Description</h5>
            </div>
          </div>
          <div>
            <div className="questionTop">
              <div className="questionContent"></div>
            </div>
            <div className="questionBottom">
              <h3 className="questionh3">Teardrop</h3>
              <h5 className="questionh5">Description</h5>
            </div>
          </div>
          <div>
            <div className="questionTop">
              <div className="questionContent"></div>
            </div>
            <div className="questionBottom">
              <h3 className="questionh3">Medium density</h3>
              <h5 className="questionh5">Description</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grayBackdrop"
        style={{
          marginTop: '3.5%',
          position: 'relative',
        }}
      >
        <div
          className="resultsRecDiv"
          style={{
            width: '30%',
            background: 'gray',
            left: '10%',
          }}
        ></div>
        <div
          className="resultsRecDiv"
          style={{
            width: '50%',
            background: 'black',
            right: '10%',
          }}
        >
          <p
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: '75%',
              position: 'absolute',
              top: '11%',
              left: '11%',
            }}
          >
            User's
          </p>
          <h1
            style={{
              color: 'white',
              fontWeight: '300',
              fontSize: '180%',
              top: '20%',
              position: 'absolute',
              left: '11%',
            }}
          >
            Recommendations
          </h1>
          <p style={readMoreStyle}>Read More</p>
        </div>
        <div className="resultsRecDetailsDiv" style={{ left: '10%' }}>
          <p style={recStyle}>Plunge</p>
          <p style={pStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore...
          </p>
          <p style={readMoreStyle}>Read More</p>
        </div>
        <div className="resultsRecDetailsDiv" style={{ right: '10%' }}>
          <p style={recStyle}>Padded</p>
          <p style={pStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore...
          </p>
          <p
            style={{
              fontWeight: '300',
              fontSize: '60%',
              position: 'absolute',
              bottom: '12%',
            }}
          >
            Read More
          </p>
        </div>
      </div>

      <div
        className="grayBackdrop"
        style={{
          marginTop: '3.5%',
          marginBottom: '13%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontSize: '120%',
            position: 'absolute',
            top: '8%',
          }}
        >
          Brands Based on Aesthetic
        </p>
        <p
          style={{
            fontSize: '85%',
            position: 'absolute',
            top: '15%',
          }}
        >
          Here are bras and brands that would fit you well
        </p>
        <div
          className="threeRectContainer"
          style={{ position: 'absolute', top: '35%' }}
        >
          <div>
            <div className="questionTop"></div>
            <p style={{ fontSize: '125%', marginTop: '20%', width: '220px' }}>
              Natural / Bigger
            </p>
            <p style={{ fontSize: '75%', position: 'absolute', bottom: '41%' }}>
              ThirdLove
            </p>
          </div>
          <div>
            <div className="questionTop"></div>
            <p style={{ fontSize: '125%', marginTop: '20%', width: '220px' }}>
              Support, but looks like you're not wearing the right bra
            </p>
            <p style={{ fontSize: '75%', position: 'absolute', bottom: '41%' }}>
              Cuup
            </p>
          </div>
          <div>
            <div className="questionTop"></div>
            <p style={{ fontSize: '125%', marginTop: '20%', width: '220px' }}>
              Fully molded / not natural
            </p>
            <p style={{ fontSize: '75%', position: 'absolute', bottom: '41%' }}>
              Freya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
