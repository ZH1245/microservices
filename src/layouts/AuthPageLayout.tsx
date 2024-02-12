import React from 'react'

function AuthPageLayout({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <div className='h-screen grid grid-cols-2 p-2'>
            {/* <img src='https://source.unsplash.com/random' alt="Random" width={0} height={0} className='w-full h-full rounded-xl'/> */}
            <div className='rounded-xl h-full w-full bg-cover bg-no-repeat' style={{ backgroundImage: "url('https://source.unsplash.com/random')" }} />
            {children}
        </div>
    )
}

export default AuthPageLayout