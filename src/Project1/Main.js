import React from 'react'
import { RouterProvider } from 'react-router'
import { Router } from './Router/Router'


function Main() {
  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default Main