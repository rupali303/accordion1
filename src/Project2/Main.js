import React from 'react'
import Navbar from './pages/Navbar'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'

function Main() {
  return (
    <>
      {/* <Navbar/>   */}
      < RouterProvider router={router}/>
    </>
  )
}

export default Main