import React from 'react';
import Image from 'next/image';

// Defining the about page
export default function About() {
  return (
    <div className="about_body">
      <div className="about_title_container">
        <p className="about_title">
          HERE AT FROOT
        </p>
        <hr style={{ width: '100%' }} />
        <h1 className="about_story">
          We&apos;re writing a new boob story.
        </h1>
      </div>

      <div className="about_image">
        <Image className="about_image_desktop" src="/abouteImages.svg" layout="fill"></Image>
        <img className="about_image_mobile" src="happygirls.svg"></img>
      </div>
      {/* about container */}
      <div className="about_container">
        <h1
          className="about_container_title">
          And we welcome you to Froot.
        </h1>
      </div>
      <h1 className="about_container_description">
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
      <h1 className="about_container_description">
        Froot began as a class project on 3D modeling bras and quickly evolved
        into a multi-pronged entity. Today, we connect users to their best
        fitting bras on the market, create a unique personal profile that grows
        with them, and providing educational content on breast and bra health.{' '}
      </h1>
    </div>
  );
}
