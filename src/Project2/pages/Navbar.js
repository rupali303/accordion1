import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

const navigate = useNavigate()

  const handleLogin = ()=>{
  navigate("/Login")
  }

  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          
          <Button onClick={handleLogin} variant='contained' sx={{marginLeft:"auto"}} color="success">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>  
    </>
  )
}

export default Navbar