import React, { useState } from 'react'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <form className='flex flex-col gap-3 mt-20' onSubmit={e => e.preventDefault()}>
        <label className='flex flex-col gap-1 font-semibold'>
          Email
          <input className='border rounded-md p-1.5 bg-gray-100' type='email' />
        </label>
        <label className='flex flex-col gap-1 font-semibold'>
          Password
          <div className='flex items-center relative'>
            <input className='border rounded-md p-1.5 w-full pr-9 bg-gray-100' type={showPassword ? "text" : 'password'} />
            <button className='absolute right-0 p-1.5' type='button' onClick={() => setShowPassword(prev => !prev)}>{
              showPassword ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 h-6'><path fill="#888888" d="m16.1 13.3l-1.45-1.45q.275-1.325-.687-2.262T11.65 8.85L10.2 7.4q.425-.2.875-.3T12 7q1.875 0 3.188 1.313T16.5 11.5q0 .475-.1.925t-.3.875m3.2 3.15l-1.45-1.4q.95-.725 1.7-1.612T20.8 11.5q-1.25-2.525-3.613-4.012T12 6q-.725 0-1.412.1T9.2 6.4L7.65 4.85q1.05-.425 2.138-.637T12 4q3.425 0 6.263 1.8t4.337 4.85q.1.2.15.413t.05.437q0 .225-.038.438t-.137.412q-.55 1.225-1.4 2.263T19.3 16.45M12 19q-3.35 0-6.125-1.812T1.5 12.425q-.125-.2-.187-.437T1.25 11.5q0-.25.05-.475t.175-.45q.5-1 1.163-1.912T4.15 7L2.075 4.9q-.275-.3-.262-.712T2.1 3.5q.275-.275.7-.275t.7.275l17 17q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-3.5-3.45q-.875.275-1.775.413T12 19M5.55 8.4q-.725.65-1.325 1.425T3.2 11.5q1.25 2.525 3.613 4.013T12 17q.5 0 .975-.062t.975-.138l-.9-.95q-.275.075-.525.113T12 16q-1.875 0-3.188-1.312T7.5 11.5q0-.275.038-.525t.112-.525zm4.2 4.2"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24"><path fill="#888888" d="M12 16q1.875 0 3.188-1.312T16.5 11.5q0-1.875-1.312-3.187T12 7q-1.875 0-3.187 1.313T7.5 11.5q0 1.875 1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5q0-1.125.788-1.912T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4q3.65 0 6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19m0-2q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6Q9.175 6 6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17"></path></svg>

            }</button>
          </div>
        </label>
        <button type='submit' className='bg-primary text-primary-foreground text-lg rounded-md p-2 font-medium enabled:hover:opacity-90 transition-all disabled:cursor-not-allowed enabled:active:scale-[0.97]'>Submit</button>
      </form>
      <hr className='my-3' />
      <button type='submit' className='flex items-center gap-3 justify-center bg-secondary text-secondary-foreground text-lg rounded-md p-2 font-medium enabled:hover:opacity-90 transition-all disabled:cursor-not-allowed enabled:active:scale-[0.97]'>Login With Google <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"></path><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4"></path></svg></button></>

  )
}

export default LoginForm