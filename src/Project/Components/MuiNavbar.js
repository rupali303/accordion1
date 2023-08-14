import React, { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function MuiNavbar() {
    const navigate = useNavigate()
    // const [index, setIndex] = useState(0)

    // const theme = useTheme()

    // const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const handleLogin = () => {
        navigate("/Login")
    }



    return (
        <>
            <div>
                <img style={{ objectFit: "cover", width: "1200px" }} src='https://themewagon.github.io/feane/images/hero-bg.jpg' />
                <AppBar sx={{ backgroundColor: "lightcyan" }}>
                    <Toolbar>
                        <HomeIcon sx={{ fontSize: 40, color: "black" }} />
                        <Typography sx={{ color: "black" }} variant='h4'>Restaurant</Typography>
                        <Tabs>
                            <Tab label="HOME" />
                            <Tab label="MENU" />
                            <Tab label="ABOUT" />
                            <Tab label="BOOKTABLE" />
                            {/* <Person2Icon sx={{color:"black", fontSize: "20",marginLeft:"auto"}}/> */}
                            {/* <ShoppingCartIcon sx={{color:"black", fontSize: "20",marginLeft:"auto"}}/> */}
                        </Tabs>
                        <Button sx={{ marginLeft: "auto", borderRadius: "25px" }} onClick={handleLogin} variant='contained'>Order Online</Button>
                    </Toolbar>

                </AppBar>
            </div>
            <div style={{
                position: "absolute",
                top: "45%",
                left: "27%",
                transform: "translate(-50%, -50%)",
                color: "white",

            }}>
                <h1>
                    FAST FOOD RESTAURANT
                </h1>
                <p style={{marginBottom:"30px"}}>
                    Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad<br/> mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore,<br/> sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                </p>
                <Button sx={{ marginLeft: "auto", borderRadius: "25px" }} onClick={handleLogin} variant='contained'>Order Now</Button>
            </div>
        </>
    )
}

export default MuiNavbar