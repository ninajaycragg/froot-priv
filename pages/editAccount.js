import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import globalVal from "../middleware/global";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useRouter } from 'next/router';
import { positions } from '@mui/system';
import { Padding } from '@mui/icons-material';

export default function editAccount({ isModal }) {
    const [inputs, setInputs] = useState({});
    const [originalInputs, setOriginalInputs] = useState({});
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    useEffect(() => {
        const email = localStorage.getItem('email');
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');
        setInputs(values => ({ ...values, email: email, firstName: firstName, lastName: lastName }))
        setOriginalInputs(values => ({ ...values, email: email, firstName: firstName, lastName: lastName }))
    }, [])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const info = {
            origEmail: globalVal.email,
            email: inputs["email"],
            password: inputs["password"],
            firstName: inputs["firstName"],
            lastName: inputs["lastName"],
        };
        // Ensure that a user is already logged in
        await fetch('/api/auth', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                info.origEmail = data.email;
            })

        fetch('/api/editAccount', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) { window.alert(data.message) }
                else {
                    if (inputs["email"] !== undefined && inputs["email"].length != 0) {
                        globalVal.email = inputs["email"];
                    }
                    window.alert("Successfully updated your profile!");
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
                width: isModal ? '50vw' : '100vw',
                height: isModal ? '50vh' : '100vh',
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
                        <b>ACCOUNT </b>
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
                {isBeingEdited ?

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
                                placeholder='Email to be added'
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
                                type="text"
                                placeholder='First Name to be added'
                                name="firstName"
                                value={inputs.firstName || ""}
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
                                type="text"
                                placeholder='Last Name to be added'
                                name="lastName"
                                value={inputs.lastName || ""}
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
                                placeholder='Password to be added'
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
                                value={"Save changes"}
                                variant="filled"
                                size="small"
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
                                    border: '0px'
                                }}
                            />

                        </div>
                    </form>




                    :

                    <Grid container spacing={4}>

                        <Grid
                            item
                            xs={12}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >

                            <Grid item>Name</Grid>
                            <Grid item>{originalInputs.firstName + " " + originalInputs.lastName}</Grid>


                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >

                            <Grid item>Email</Grid>
                            <Grid item>{originalInputs.email}</Grid>


                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >

                            <Grid item>Password</Grid>
                            <Grid item>&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;</Grid>


                        </Grid>
                        <Grid item
                            xs={12} container>
                            <Button style={{
                                width: "100%",
                                borderRadius: 999999
                            }} variant="contained">Make Changes</Button>
                        </Grid>
                    </Grid>


                }

            </div>
        </div>
    )
}
