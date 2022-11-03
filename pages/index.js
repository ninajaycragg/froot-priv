import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

// describes the home page
export default function Home() {
  const router = useRouter();
  const handleQuizClick = () => {
    console.log("click");
    router.push('/questions');
  };
  return (
    <div className="index_body">
      <div className="index_r1">
        <div className="index_imagestack">
          <img className="index_hanginglaundry" src="/hanginglaundry.svg"></img>
          <img className="index_brahangingsunset" src="/brahangingsunset.svg"></img>
        </div>
        <img className="index_hanginglingerie" src="/hanginglingerie.svg"></img>
        <div className="index_title_wrap">
          <h1 className="index_title">Froot.</h1>
          <div className="index_description_desktop">THE BEST WAY TO FIND BRAS THAT FIT ON THE FIRST TRY.</div>
          <div className="index_description_mobile">THE BEST WAY TO FIND BRAS</div>
          <div className="index_description_mobile">THAT FIT ON THE FIRST TRY.</div>
        </div>
        <img className="index_orangeslingerie" src="/orangeslingerie.svg"></img>
        <div className="index_imagestack">
          <img className="index_lingerieshadow" src="/lingerieshadow.jpeg"></img>
          <img className="index_lingerieclothesline" src="/lingerieclothesline.svg"></img>
        </div>
      </div>
      {/* handle click not working on mobile enter */}
      <div className="index_quiz_enter" onClick={handleQuizClick}>
        <p className="index_perfectbra">YOUR PERFECT BRA FITS HERE</p>
        <div className="general" style={{ width: '350px', height: '25%', alignItems: 'flex-start', marginLeft: 'auto', marginRight: 'auto' }}
          onClick={handleQuizClick}>
          <Image src="/sparkles.gif" width="50%" height="50%"></Image>
          <hr className="index_quiz_line" />
          <Image src="/sparkles.gif" width="50%" height="50%"></Image>
        </div>
      </div>
      <img className="index_lingerieshadow_mobile" src="/braclasp.svg"></img>
      <div className="index_r2">
        <img className="index_braflowers" src="/braflowers.svg"></img>
        <img className="index_dresser" src="/dresser.jpeg"></img>
        <img className="index_hanginglingeriebluesky" src="/hanginglingeriebluesky.jpg"></img>
      </div>
    </div>
  );
}
