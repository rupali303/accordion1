import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function MuiForm() {
    const [isSignUp, setIsSignUp] = useState(false)

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSwitch = () => {
        setIsSignUp(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box boxShadow={"2px 2px 5px gray"} sx={{ ":hover": { boxShadow: "4px 4px 20px gray" } }} borderRadius={"20px"} border={"1px solid gray"} padding={"30px"} display={"flex"} margin={"100px auto"} maxWidth={"450px"} flexDirection={"column"}>
                    <Typography textAlign={"center"} fontSize={"30px"} color={"blue"}>{isSignUp ? "Sign Up" : "Login"}</Typography>
                    
                    {isSignUp && <TextField variant='outlined' name='username' value={formData.username} onChange={handleChange} sx={{ borderRadius: "10px" }} margin='normal' placeholder='Enter Name' type='text' /> }
                    <TextField variant='outlined' name='email' value={formData.email} onChange={handleChange} sx={{ borderRadius: "10px" }} margin='normal' placeholder='Enter Email' type='email' />
                    <TextField variant='outlined' name='password' value={formData.password} onChange={handleChange} sx={{ borderRadius: "10px" }} margin='normal' placeholder='Enter Password' type='password' />
                    <Button variant='contained' sx={{ mt: 2 }} type='submit'>{isSignUp ? "Sign Up" : "Login"}</Button>
                    <Button sx={{ mt: 2 }} onClick={handleSwitch}>{isSignUp ? "Login" :"Sign Up" }</Button>

                </Box>

            </form>
        </>
    )
}

export default MuiForm