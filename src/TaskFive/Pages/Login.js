import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Register from './Register';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleUserChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const persons = JSON.parse(window.localStorage.getItem('register'));


    const handleSubmit = (e) => {
        e.preventDefault();

            const loginData = {
                email,
                password,
            }

        persons.map((p) => {
            if (!email || !password) {
                alert(`Username and password is mandatory. Register first if not registered.`)
            }
            else if (email === p.email && password === p.password) {
                    alert(`Logged in Successfully`)
                    const persons = JSON.parse(window.localStorage.getItem('register')); 
                    if(p.role === "hod"){
                        navigate("/hodDashboard")
                        localStorage.setItem("signIn",JSON.stringify(persons))
                    }else if(p.role === "staff"){
                        navigate("/staffDashboard")
                        localStorage.setItem("signIn",JSON.stringify(persons))
                    }
            }
            else {
                alert(`Invalid Credentials`)}
        });
       
    }

    const handleRegister = () => {
        navigate('/register')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box display={"flex"}
                    flexDirection={"column"}
                    border={"1px solid gray"}
                    margin={"40px auto"}
                    maxWidth={"350px"}
                    padding={"50px"}
                    borderRadius={"10px"}
                    boxShadow={"2px 2px 5px gray"}
                    sx={{
                        ":hover": {
                            boxShadow: "4px 4px 10px gray"
                        }
                    }}

                >
                    <Typography textAlign={"center"} variant='h5'>Login</Typography>
                    <TextField margin='normal' type='email' name='email' placeholder='Enter Email' value={email} onChange={handleUserChange} />
                    <TextField margin='normal' type='password' name='password' placeholder='Enter password' value={password} onChange={handlePasswordChange} />
                    <Button  type='submit' sx={{ padding: "12px 45px", margin: "15px auto" }} variant='contained'>Login</Button>
                    <Button onClick={handleRegister} >Register</Button>
                </Box>
            </form>

        </>
    )

}


export default Login



