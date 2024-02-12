import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {
    return (
        <>
        <Link to='/auth/login'>Login Page</Link>
        <Link to='/auth/signup'>Signup Page</Link>
        <Link to='/components'>Components Overview UI (In Progress)</Link>
        </>
    )
}

export default Index
