import { isLogin } from '@/lib/middleware/authentication'
import React from 'react'

export const metadata={
    title:'Register',
    description:'Register page'
}

const RegisterLayout = async({children}) => {
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

export default RegisterLayout
