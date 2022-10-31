import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import globalVal from "../middleware/global";
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useRouter } from 'next/router';
import { positions } from '@mui/system';
import { Padding } from '@mui/icons-material';

export default function Results() {

  const router = useRouter();
  useEffect(async () => {
    // event.preventDefault();
    let info = {
      email: globalVal.email,
    };

    await fetch('http://localhost:5001/user/auth', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        info.email = data.email;
      })

    await fetch('http://localhost:5001/user/brands', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    })
      .then(res => res.text())
      .then(data => { window.alert(data) });
    // .then(data => {
    //   window.alert(data)
    // })
    // .catch((error) => {
    //   window.alert(error.message);
    //   return;
    // });

  }, []);


  return (
    <div className="results_top">



    </div>
  );
}
