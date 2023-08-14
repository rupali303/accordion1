import React from 'react'
import Navbar from '../../pages/Navbar'
import { Outlet } from 'react-router-dom'

function RootElement() {
  return (
    <>
      <Navbar/>  
      <Outlet/>
    </>
  )
}

export default RootElement