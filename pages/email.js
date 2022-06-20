import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function email() {
  return (
    // <div className="grayBackdrop">
    //   <div
    //     style={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       flexDirection: 'column',
    //     }}
    //   >
    //     <h3 style={{ position: 'absolute', bottom: '70%' }}>
    //       For recs and tailored content
    //     </h3>
    //     <input
    //       type="text"
    //       placeholder="email"
    //       style={{
    //         width: '25%',
    //         lineHeight: '3.3em',
    //         paddingLeft: '1.5%',
    //         borderRadius: '5px',
    //         border: '1px solid black',
    //         position: 'absolute',
    //         bottom: '60%',
    //       }}
    //     />
    //     <Button
    //       variant="outlined"
    //       style={{
    //         textTransform: 'capitalize',
    //         fontWeight: '100',
    //         color: 'white',
    //         background: 'black',
    //         width: '25%',
    //         fontSize: '80%',
    //         borderRadius: '5px',
    //         position: 'absolute',
    //         bottom: '50%',
    //         lineHeight: '3.3em',
    //       }}
    //     >
    //       <Link href={'/results'}>See your Results</Link>
    //     </Button>
    //   </div>
    // </div>
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: '#FAF8F1',
      }}
    >
      <div style={{ width: '60%', height: '100%', position: 'relative' }}>
        <Image src="/emailImage.svg" layout="fill"></Image>
      </div>
      <div
        style={{
          width: '40%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            margin: '0',
            padding: '0',
            fontFamily: 'tempios family',
            fontStyle: 'italic',
            fontWeight: '400',
            width: '60%',
            fontSize: '220%',
            textAlign: 'center',
            marginBottom: '10%',
          }}
        >
          For bra recs and tailored content
        </h1>
        <TextField
          style={{
            width: '45%',
            marginBottom: '5%',
            background: 'white',
          }}
          label="Email"
          size="small"
        ></TextField>
        <Button
          variant="filled"
          style={{
            textAlign: 'center',
            textTransform: 'capitalize',
            color: 'white',
            background: '#670224',
            width: '45%',
            weight: '400',
          }}
        >
          Enter
        </Button>
      </div>
    </div>
  );
}
