import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Register() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const [data, setData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...data, formData])
    const updatedData = [...data, formData]
    console.log(formData);

    localStorage.setItem("register", JSON.stringify(updatedData))
setFormData({
  firstName: "",
    lastName: "",
    email: "",
    password: ""
})


  }
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = () => {
    navigate("/Login")
  }


  return (
    <>
      <form onClick={handleSubmit}>
        <Box sx={{ maxWidth: "350px", border: "2px solid gray", borderRadius: "10px", boxShadow: "2px 2px 10px gray", margin: "150px auto", padding: "50px" }}>
          <Typography textAlign={"center"} variant='h5' marginBottom={"10px"}>Register</Typography>
          <TextField sx={{ marginBottom: "10px" }} name='firstName' type='text' onChange={handleChange} value={formData.firstName} placeholder='Enter firstName' />
          <TextField sx={{ marginBottom: "10px" }} name='lastName' type='text' onChange={handleChange} value={formData.lastName} placeholder='Enter Lastname' />
          <TextField sx={{ marginBottom: "10px" }} name='email' type='email' onChange={handleChange} value={formData.email} placeholder='Enter Email' />
          <TextField sx={{ marginBottom: "10px" }} name='password' type='password' onChange={handleChange} value={formData.password} placeholder='Enter Password' />
          <Button sx={{ mt: 2, paddingX: "90px" }} onClick={handleLogin} variant='contained'>Login</Button>
          <Button sx={{ mt: 2, paddingX: "75px" }}  >Register</Button>

        </Box>
      </form>
    </>
  )
}

export default Register