import { isLogin } from '@/lib/middleware/authentication'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata={
    title:'Login',
    description:'Login page'
}

const LoginLayout = async({children}) => {
  const auth= await isLogin()
  if(auth.success) {
    return redirect('/chat')
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default LoginLayout
