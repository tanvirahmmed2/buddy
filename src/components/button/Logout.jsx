'use client'
import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

const Logout = () => {
    const logoutHandle=async () => {
        try {
            const response= await axios.get('/api/logout', {withCredentials:true})
            toast.success(response.data.message)
            window.location.replace('/login')
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || "Failed to logout")
        }
        
    }
  return (
    <button className='cursor-pointer' onClick={logoutHandle}>Logout</button>
  )
}

export default Logout
