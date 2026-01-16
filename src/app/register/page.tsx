import RegisterForm from '@/component/forms/RegisterForm'
import React from 'react'

const RegisterPage = () => {
    return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="w-auto  min-w-100 flex flex-col md:flex-row items-center justify-center border rounded-lg overflow-hidden p-2">
        <div className="w-full flex flex-col items-center justify-center">
          <p className=''>Welcome to</p>
          <h1 className='text-4xl font-semibold'>Buddy</h1>
          <p>task manager</p>

        </div>
        <RegisterForm/>
      </div>

    </div>
  )
}

export default RegisterPage
