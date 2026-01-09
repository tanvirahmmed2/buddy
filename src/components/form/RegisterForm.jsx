'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/register', formData, { withCredentials: true })
      toast.success(response.data.message)
      window.location.replace('/chat')

    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message || 'Failed to log in')

    }
  }
  return (
    <form onSubmit={handleRegister} className='w-full flex flex-col items-center justify-center gap-2'>
      <div className='w-full flex flex-col gap-1 '>
        <label htmlFor="name" className='text-sm'>Name</label>
        <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} className='w-full border outline-none px-2 p-1' required />
      </div>
      <div className='w-full flex flex-col gap-1 '>
        <label htmlFor="email" className='text-sm'>Email</label>
        <input type="email" name='email' id='email' value={formData.email} onChange={handleChange} className='w-full border outline-none px-2 p-1' required />
      </div>
      <div className='w-full flex flex-col gap-1 '>
        <label htmlFor="password" className='text-sm'>Password</label>
        <input type="password" value={formData.password} name='password' id='password' onChange={handleChange} className='w-full border outline-none px-2 p-1' required />
      </div>
      <button type='submit' className='bg-blue-400 text-white p-1 w-full text-center '>Register</button>
    </form>
  )
}

export default RegisterForm
