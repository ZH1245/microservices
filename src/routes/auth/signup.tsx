import { Link, createFileRoute } from '@tanstack/react-router'
import SignupForm from './-components/SignupForm';
import AuthPageLayout from '../../layouts/AuthPageLayout';

export const Route = createFileRoute('/auth/signup')({
  component: Signup
});

function Signup() {
  return (
    <AuthPageLayout>
      <div className='flex flex-col items-center h-full justify-between p-2'>
        <h1 className='text-xl'>Logo</h1>
        <div className="flex flex-col gap-2 w-full max-w-md">
          <h1 className='text-3xl font-semibold text-center'>Create your account</h1>
          <span className="text-gray-500 font-medium text-center">Let's get started!</span>
          <SignupForm />
        </div>
        <div className='flex items-center gap-2'>
          <span>Already have an account?</span> <Link to='/auth/login' className='font-semibold'>Login</Link> </div>
      </div>
    </AuthPageLayout>
  )
}

export default Signup