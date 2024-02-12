import { Link, createFileRoute } from '@tanstack/react-router'
import LoginForm from './-components/LoginForm'
import AuthPageLayout from '../../layouts/AuthPageLayout'

export const Route = createFileRoute('/auth/login')({
  component: Login
})
function Login() {
  return (
    <AuthPageLayout>
      <div className='flex flex-col items-center h-full justify-between p-2'>
        <h1 className='text-xl'>Logo</h1>
        <div className="flex flex-col gap-2 w-full max-w-md">
          <h1 className='text-3xl font-semibold text-center'>Welcome</h1>
          <span className="text-gray-500 font-medium text-center">Enter your email and password to access your account</span>
          <LoginForm />
        </div>
        <div className='flex items-center gap-2'>
          <span>Dont have an account?</span> <Link to='/auth/signup' className='font-semibold'>Sign Up</Link> </div>
      </div>
    </AuthPageLayout>
  )
}

export default Login