import React from 'react'
import { Outlet } from 'react-router'
import MuiNavbar from '../../Components/MuiNavbar'

function RootLayout() {
  return (
    <div>
        <MuiNavbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout