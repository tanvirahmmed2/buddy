import { isLogin } from '@/lib/helper/middleware'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata={
    title:'Register || Buddy',
    description:'Register page'
}

const RegisterLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const auth =await isLogin()
    if (auth.success) {
        return redirect('/task')
    }
    return (
        <div className='w-full'>
            {children}
        </div>
    )
}

export default RegisterLayout
