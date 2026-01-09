import RegisterForm from '@/components/form/RegisterForm'
import React from 'react'

const Register = () => {
  return (
   <div className='w-full flex items-center justify-center p-4 min-h-screen'>
      <div className='w-auto flex flex-col md:flex-row items-center justify-center gap-2 border border-sky-400 rounded-lg p-2'>
        <div className='w-full flex flex-col items-center justify-center gap-2'>
          <p>Welcome to</p>
          <h1 className='text-2xl font-extrabold text-sky-400'>Buddy</h1>
          <p>Web based messaing app</p>
        </div>
        <RegisterForm/>
      </div>

    </div>
  )
}

export default Register
