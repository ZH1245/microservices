import { Outlet, createRootRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createRootRoute({
    component: Root,
})

function Root() {
    return (
        <Outlet />
    )
}

export default Root