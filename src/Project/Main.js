import React from 'react'
import MuiNavbar from './Components/MuiNavbar'
import MuiForm from './Components/MuiForm'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Router'

function Main() {
  return (
    <>
        {/* <MuiNavbar/>
        <MuiForm/> */}
        <RouterProvider router={router}/>
    </>
  )
}

export default Main