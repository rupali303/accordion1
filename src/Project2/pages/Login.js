// import { Box, Button, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router'

// function Login() {

//   const navigate = useNavigate()
// const [formData, setFormData] = useState({
//   email:"",
//   password:""
// })
// const [data, setData] = useState([])

// const handleSubmit = (e)=>{
// e.preventDefault()
// setData([...data,formData])
// const updatedData = [...data,formData]
// localStorage.setItem("user",JSON.stringify(updatedData))
// }
// const loginData = {
//   email,
//   password,
// }
// const userRegister = JSON.parse(localStorage.getItem("register"))

// userRegister.map((p)=>{
//   if(!email || !password){
//     alert("Enter Email and password")
//   }
//   else if(email ===p.email && password === p.password){
//     alert("Login successfully")
//   }else
//   alert("Invalid creadentials")
// })

// const handleChange = (e)=>{
// setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
// }

// const handleRegister=()=>{
//   navigate("/register")
// }

//   return (
//     <>
//     <form onClick={handleSubmit}>
//     <Box sx={{maxWidth:"350px", border:"2px solid gray",borderRadius:"10px",boxShadow:"2px 2px 10px gray" ,margin:"150px auto",padding:"50px"}}>
//         <Typography textAlign={"center"} variant='h5'marginBottom={"10px"}>Login</Typography>
//       <TextField sx={{marginBottom:"10px"}} onChange={handleChange} value={formData.email} name='email' type='email' placeholder='Enter Email'/>
//       <TextField name='password' type='password' onChange={handleChange} value={formData.password} placeholder='Enter Password'/>
//       <Button sx={{mt:2,paddingX:"90px"}} variant='contained'>Login</Button>
//       <Button sx={{mt:2,paddingX:"75px"}} onClick={handleRegister} >Register</Button>
        
//       </Box>
//     </form>
     
//     </>
//   )
// }

// export default Login