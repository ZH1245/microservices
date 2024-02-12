import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {
    return (
        <div className='flex items-center gap-2'>
        <Link to='/auth/login'>Login Page</Link>
        <Link to='/auth/signup'>Signup Page</Link>
        <Link to='/components'>Components Overview UI (In Progress)</Link>
        </div>
    )
}

export default Index
