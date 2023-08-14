
import { Box, Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { DEPARTMENT } from '../constants/constants'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Register() {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        role: "hod",
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        department: "",
        userName: "",
        password: "",
       id:uuidv4()
    })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        setData([...data,formData])
        const updatedData = [...data,formData]
        localStorage.setItem("register",JSON.stringify(updatedData));
        setFormData({
            role: "hod",
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            department: "",
            userName: "",
            password: ""
        })
    };

//    console.log("signin successfully");

    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    borderRadius={"25px"}
                    border={"1px solid gray"}
                    padding={"60px"}
                    display={"flex"}
                    maxWidth={"450px"}
                    flexDirection={"column"}
                    margin={"100px auto"}
                    boxShadow={"5px 5px 10px gray"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px gray"
                        }
                    }}

                >
                    <FormControl>
                        <RadioGroup
                            row name='role'>
                            <FormControlLabel
                                value="hod"
                                control={<Radio />}
                                label="HOD"
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                value="staff"
                                control={<Radio />}
                                label="Staff"
                                onChange={handleChange}
                            />
                        </RadioGroup>
                    </FormControl>

                    <Grid item container xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                variant='outlined'
                                value={formData.firstName}
                                onChange={handleChange}
                                margin='normal'
                                name='firstName'
                                placeholder='Enter First Name'
                                type='text'
                            />
                            <TextField
                                variant='outlined'
                                value={formData.email}
                                onChange={handleChange}
                                margin='normal'
                                name='email'
                                placeholder='Enter Email'
                                type='email'
                            />
                            <FormControl margin='normal' fullWidth>

                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select
                                    value={formData.department}
                                    label="department"
                                    onChange={handleChange}
                                    name='department'
                                >
                                    {DEPARTMENT.map((item, i) => {
                                        return <MenuItem key={i} value={item}>{item}</MenuItem>
                                    })}


                                </Select>
                            </FormControl>
                            <TextField
                                variant='outlined'
                                value={formData.userName}
                                onChange={handleChange}
                                margin='normal'
                                name='userName'
                                placeholder='Enter Username'
                                type='text'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant='outlined'
                                value={formData.lastName}
                                onChange={handleChange}
                                margin='normal'
                                name='lastName'
                                placeholder='Enter LastName'
                                type='text'
                            />
                            <TextField
                                variant='outlined'
                                value={formData.contact}
                                onChange={handleChange}
                                margin='normal'
                                name='contact'
                                placeholder='Enter Contact'
                                type='number'
                            />
                            <TextField
                                sx={{ visibility: "hidden" }}
                                margin='normal'
                            />
                            <TextField
                                variant='outlined'
                                value={formData.password}
                                onChange={handleChange}
                                margin='normal'
                                name='password'
                                placeholder='Enter Password'
                                type='password'
                            />
                        </Grid>
                    </Grid>

                    <Button sx={{ mt: 2 }} type='submit' variant='contained'>
                        Register
                    </Button>
                    <Button sx={{ mt: 2 }} onClick={handleLogin}>
                        Login
                    </Button>

                </Box>
            </form>
        </>
    )
}

export default Register








