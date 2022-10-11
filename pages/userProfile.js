import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useRouter } from 'next/router';
import { positions } from '@mui/system';
import { Padding } from '@mui/icons-material';

export default function Login() {
    //TO BE CHANGED -------------------------------------
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    //------------------------------------------------------

    return (
        <div
            className="general"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#FAF8F1',
            }}
        >

            <div
                style={{
                    width: '50%',
                    height: '75%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >

                <div
                    className="general"
                    style={{
                        width: '60%',
                        justifyContent: 'left',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >

                    <p
                        className="neutralize"
                        style={{
                            fontWeight: '500',
                            fontFamily: 'Inter',
                            fontSize: '0.875em',
                            marginRight: '1%',
                        }}
                    >
                        <b>ACCOUNT INFORMATION</b>
                    </p>

                    <div
                        style={{
                            marginTop: '-3em',
                            marginLeft: '15em'
                        }}
                    >
                        <Image
                            src="/sparkles.gif"
                            width="50%"
                            height="50%"
                        ></Image>
                    </div>

                </div>

                <hr
                    style={{
                        width: '60%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '3%',
                        justifyContent: 'center'
                    }}
                />

                <div
                    style={{
                        width: '60%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '3%',
                        justifyContent: 'center'
                    }}
                >
                    <p>email to be added</p>
                    <hr/>

                    <p>first name to be added</p>
                    <hr/>

                    <p>last name to be added</p>
                    <hr/>

                    <p>password to be added</p>
                    <hr/>

                    <br></br>

                    <button
                        style={{
                            padding: '15px 40px',
                            fontSize: '0.875em',
                            height: '15%',
                            borderRadius: '5px',
                            background: '#670224',
                            color: 'white',
                            boxSizing: 'border-box',
                            width: '100%',
                            marginBottom: '5%',
                            lineHeight: '100%',                                
                            fontFamily: 'Inter',
                            border: 'opx'
                        }}
                    >
                        Edit Account
                    </button>

                    <button
                        style={{
                            padding: '15px 40px',
                            fontSize: '0.875em',
                            height: '15%',
                            borderRadius: '5px',
                            background: '#FAF8F1',
                            color: 'black',
                            boxSizing: 'border-box',
                            width: '100%',
                            marginBottom: '5%',
                            lineHeight: '100%',                                
                            fontFamily: 'Inter',
                            border: '1px solid black'
                        }}
                    >
                        Logout
                    </button>
                </div>

                

                

            </div>
        </div>
    )
}