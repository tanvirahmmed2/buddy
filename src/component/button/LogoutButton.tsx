'use client'

import axios from "axios"

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/user/logout", { withCredentials: true })
      alert(response.data.message)
      window.location.replace('/login')
    } catch (error: any) {
      console.log(error)
      alert(error?.response?.data?.payload || 'Failed to logout')

    }
  }
  return (
    <button className='px-4 h-14 w-auto flex items-center justify-center hover:bg-white/30 cursor-pointer' onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton
