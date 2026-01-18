'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'

const Intro = () => {
  return (
    <div className='w-full flex min-h-150 p-2 flex-col md:flex-row items-center justify-center bg-emerald-300'>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <p className='w-full text-center uppercase italic text-xl'>Met Your Best Task Manager</p>
        <div className='text-4xl md:text-8xl font-semibold  drop-shadow-2xl'>
          <Typewriter
            options={{
              strings: 'Buddy',
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
              cursor: '.'
            }}
          />
        </div>
        <p className='w-full text-center uppercase italic text-xl'>Make Your Day Productive</p>
      </div>
      <div>

      </div>

    </div>
  )
}

export default Intro
