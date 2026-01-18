
import AllTask from '@/component/pages/AllTask'
import PendingTasks from '@/component/pages/PendingTasks'
import Summary from '@/component/pages/Summary'
import { isLogin } from '@/lib/helper/middleware'
import { redirect } from 'next/navigation'
import React from 'react'

const Profile = async () => {
  const auth = await isLogin()
  if (!auth) {
    return redirect('/login')
  }

  return (
    <div className='w-full min-h-screen flex flex-col gap-4 p-2 items-center '>
      <div className='w-full flex flex-col items-center justify-center gap-1'>
        <h1 className='text-2xl font-semibold'>Welcome {auth.payload.name}</h1>
        <p className='italic'>Profile Information</p>
        <p>Email: {auth.payload.email}</p>
      </div>
      <PendingTasks/>
      <AllTask/>
      <Summary/>
    </div>
  )
}

export default Profile
