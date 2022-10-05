import React, { useState } from 'react';
import Image from 'next/image';
import globalVal from "./global";
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { positions } from '@mui/system';
import { Padding } from '@mui/icons-material';

export default function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        const loginUser = {
            email: inputs["email"],
            password: inputs["password"],
        };

        fetch('http://localhost:5001/user/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginUser),
        })
            .then(res => res.json())
            .then(res => {
                if (res.message) { window.alert(res.message) }
                else {
                    globalVal.email = loginUser.email;
                    router.push('/quiz');
                }
            })
            .catch((error) => {
                window.alert(error.message);
                return;
            });
    }
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
                        <b>ACCOUNT LOGIN</b>
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

                <form
                    onSubmit={handleSubmit}
                    style={{
                        width: '60%',
                        height: '60%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '10%',
                        fontFamily: 'Inter',
                    }}
                >

                    <label>
                        <input
                            type="email"
                            placeholder='Enter Email Here'
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                            style={{
                                border: '1px solid',
                                borderRadius: '5px',
                                fontSize: '1.125em',
                                boxSizing: 'border-box',
                                backgroundColor: '#FAF8F1',
                                height: '15%',
                                width: '100%',
                                marginBottom: '5%',
                                paddingLeft: '5%',
                                paddingRight: '5%'
                            }}
                        />
                    </label>
                    <br></br>

                    <label>
                        <input
                            type="password"
                            placeholder='Password'
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                            style={{
                                border: '1px solid',
                                borderRadius: '5px',
                                fontSize: '1.125em',
                                boxSizing: 'border-box',
                                backgroundColor: '#FAF8F1',
                                height: '15%',
                                width: '100%',
                                marginBottom: '5%',
                                paddingLeft: '5%',
                                paddingRight: '5%'
                            }}
                        />
                    </label>
                    <br></br>

                    <div>
                        <input
                            type="submit"
                            value={"Login"}
                            variant="filled"
                            size="small"
                            style={{
                                padding: '15px 40px',
                                fontSize: '0.875em',
                                height: '100%',
                                borderRadius: '5px',
                                background: '#670224',
                                color: 'white',
                                boxSizing: 'border-box',
                                width: '100%',
                                marginBottom: '5%',
                                lineHeight: '100%',
                                fontFamily: 'Inter',
                                border: '0px'
                            }}
                        />

                    </div>
                </form>

            </div>
        </div>
    )
}
