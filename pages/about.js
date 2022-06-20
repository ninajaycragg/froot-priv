import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    // <div>
    //   <div className="grayBackdrop">
    //     <div
    //       style={{
    //         background: 'black',
    //         width: '50%',
    //         height: '700px',
    //         position: 'absolute',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <div
    //         style={{
    //           background: 'white',
    //           width: '50%',
    //           height: '360px',
    //           borderRadius: '8px',
    //         }}
    //       ></div>
    //     </div>
    //     <div>
    //       <h4
    //         style={{
    //           margin: '0',
    //           width: '30%',
    //           position: 'absolute',
    //           top: '40%',
    //           right: '7%',
    //           fontSize: '130%',
    //         }}
    //       >
    //         Who we are
    //       </h4>
    //       <p
    //         style={{
    //           margin: '0',
    //           width: '30%',
    //           position: 'absolute',
    //           top: '50%',
    //           right: '7%',
    //         }}
    //       >
    //         Description of Froot team, how we got started, etc. Lorem ipsum
    //         dolor sit amet. Description of Froot team, how we got started, etc.
    //         Lorem ipsum dolor sit amet.
    //       </p>
    //     </div>
    //   </div>
    //   <div
    //     className="threeRectContainer"
    //     style={{
    //       marginTop: '10%',
    //     }}
    //   >
    //     <div>
    //       <div className="questionTop">
    //         <div className="questionContent"></div>
    //       </div>
    //       <div className="aboutBottom">
    //         <h3 className="questionh3">Team Member</h3>
    //         <h5 className="questionh5">Their role</h5>
    //       </div>
    //     </div>
    //     <div>
    //       <div className="questionTop">
    //         <div className="questionContent"></div>
    //       </div>
    //       <div className="aboutBottom">
    //         <h3 className="questionh3">Team Member</h3>
    //         <h5 className="questionh5">Their role</h5>
    //       </div>
    //     </div>
    //     <div>
    //       <div className="questionTop">
    //         <div className="questionContent"></div>
    //       </div>
    //       <div className="aboutBottom">
    //         <h3 className="questionh3">Team Member</h3>
    //         <h5 className="questionh5">Their role</h5>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      style={{
        width: '100vw',
        height: '180vh',
        backgroundColor: '#FAF8F1',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100vw',
          height: '15%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src="/orange.svg" width="25px" height="25px"></Image>
        <h1
          style={{
            margin: '0',
            padding: '0',
            fontFamily: 'tempios family',
            fontStyle: 'italic',
            fontWeight: '400',
            width: '40%',
            fontSize: '220%',
            textAlign: 'center',
          }}
        >
          We&apos;re writing a new boob story.
        </h1>
      </div>

      <div style={{ width: '100vw', height: '35%', position: 'relative' }}>
        <Image src="/abouteImages.svg" layout="fill"></Image>
      </div>
      <div
        style={{
          width: '100vw',
          height: '5%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}
      >
        <h1
          style={{
            margin: '0',
            padding: '0',
            fontFamily: 'tempios family',
            fontStyle: 'italic',
            fontWeight: '400',
            width: '40%',
            fontSize: '220%',
            textAlign: 'center',
          }}
        >
          And we welcome you to Froot.
        </h1>
        <Image src="/orange.svg" width="25px" height="25px"></Image>
      </div>
      <h1
        style={{
          margin: '0',
          padding: '0',
          fontFamily: 'inter',
          fontWeight: '400',
          width: '60%',
          fontSize: '120%',
          textAlign: 'left',
          marginTop: '1%',
        }}
      >
        We are a team of six women who are fed up with the current bra buy
        process. Finding the perfect bra feels impossible when it should be
        painless. We started Froot with the mission of helping bra-wearers feel
        good in the bras that they&apos;re wearing. We do this by simplifying
        the process, ultimately taking the stress out of dress. Froot began as a
        class project on 3D modeling bras and quickly evolved into a
        multi-pronged entity. Today, we connect users to their best fitting bras
        on the market, create a unique personal profile that grows with them,
        and providing educational content on breast and bra health.{' '}
      </h1>
      <h1
        style={{
          margin: '0',
          padding: '0',
          fontFamily: 'inter',
          fontWeight: '400',
          width: '60%',
          fontSize: '120%',
          textAlign: 'left',
          marginTop: '1%',
        }}
      >
        Froot began as a class project on 3D modeling bras and quickly evolved
        into a multi-pronged entity. Today, we connect users to their best
        fitting bras on the market, create a unique personal profile that grows
        with them, and providing educational content on breast and bra health.{' '}
      </h1>
    </div>
  );
}
