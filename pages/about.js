import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
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
          width: '50vw',
          height: '15%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'left',
        }}
      >
        <p
          className="neutralize"
          style={{ fontSize: '80%', fontFamily: 'Inter', fontWeight: '500' }}
        >
          HERE AT FROOT
        </p>
        <hr style={{ width: '100%' }} />
        <h1
          className="neutralize"
          style={{
            fontFamily: 'tempios family',
            fontStyle: 'italic',
            fontWeight: '400',
            width: '100%',
            fontSize: '220%',
          }}
        >
          We&apos;re writing a new boob story.
        </h1>
      </div>

      <div style={{ width: '98vw', height: '35%', position: 'relative' }}>
        <Image src="/abouteImages.svg" layout="fill"></Image>
      </div>
      <div
        style={{
          width: '50vw',
          height: '5%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}
      >
        <h1
          className="neutralize"
          style={{
            fontFamily: 'tempios family',
            fontStyle: 'italic',
            fontWeight: '400',
            width: '100%',
            fontSize: '220%',
          }}
        >
          And we welcome you to Froot.
        </h1>
      </div>
      <h1
        className="neutralize"
        style={{
          fontFamily: 'inter',
          fontWeight: '400',
          width: '50%',
          fontSize: '90%',
          textAlign: 'left',
          marginTop: '1%',
          lineHeight: '200%',
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
        className="neutralize"
        style={{
          fontFamily: 'inter',
          fontWeight: '400',
          width: '50%',
          fontSize: '90%',
          textAlign: 'left',
          marginTop: '1%',
          lineHeight: '200%',
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
