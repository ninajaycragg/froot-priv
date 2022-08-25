import React from 'react';

export default function Blog() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FAF8F1',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          marginTop: '5%',
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
          style={{
            fontSize: '80%',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '82.5%',
            letterSpacing: '0.095em',
          }}
        >
          AUGUST 18, 2022
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
          Content Title
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
        Example blog text goes here...We are a team of six women who are fed up
        with the current bra buy process. Finding the perfect bra feels
        impossible when it should be painless. We started Froot with the mission
        of helping bra-wearers feel good in the bras that they&apos;re wearing.
        We do this by simplifying the process, ultimately taking the stress out
        of dress.
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
        with them, and providing educational content on breast and bra health.
      </h1>
    </div>
  );
}
