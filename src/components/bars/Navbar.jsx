'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'
import { Context } from '../provider/Conext'
import Logout from '../button/Logout'

const Navbar = () => {
  const pathname = usePathname()
  const isActive = (path) => pathname === path
  const { user } = useContext(Context)
  return (
    <div className='w-full h-16 flex flex-row items-center justify-around px-4'>
      <Link href={'/'} className='text-sky-400 text-2xl font-semibold'>Buddy</Link>
      <div className='w-auto flex flex-row items-center justify-center gap-4'>
        <Link href={'/'} className={`${isActive('/') && 'bg-sky-400 text-white'} px-5 h-8 rounded-lg flex items-center justify-center`}>Home</Link>
        <Link href={'/chat'} className={`${isActive('/chat') && 'bg-sky-400 text-white'} px-5 h-8 rounded-lg flex items-center justify-center`}>Chat</Link>
        {user === null ? <div className='w-auto flex flex-row items-center justify-center gap-4'>
          <Link href={'/login'} className={`${isActive('/login') && 'bg-sky-400 text-white'} px-5 h-8 rounded-lg flex items-center justify-center`}>Login</Link>
          <Link href={'/register'} className={`${isActive('/register') && 'bg-sky-400 text-white'} px-5 h-8 rounded-lg flex items-center justify-center`}>Register Now</Link>
        </div> : <Logout />}

      </div>

    </div>
  )
}

export default Navbar
