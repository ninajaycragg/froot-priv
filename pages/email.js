import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function email() {
  return (
    <div className="grayBackdrop">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ position: 'absolute', bottom: '70%' }}>
          For recs and tailored content
        </h3>
        <input
          type="text"
          placeholder="email"
          style={{
            width: '25%',
            lineHeight: '3.3em',
            paddingLeft: '1.5%',
            borderRadius: '5px',
            border: '1px solid black',
            position: 'absolute',
            bottom: '60%',
          }}
        />
        <Button
          variant="outlined"
          style={{
            textTransform: 'capitalize',
            fontWeight: '100',
            color: 'white',
            background: 'black',
            width: '25%',
            fontSize: '80%',
            borderRadius: '5px',
            position: 'absolute',
            bottom: '50%',
            lineHeight: '3.3em',
          }}
        >
          <Link href={'/results'}>See your Results</Link>
        </Button>
      </div>
    </div>
  );
}
