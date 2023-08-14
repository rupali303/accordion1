import React from 'react'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'

function Main() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Main