import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center justify-center gap-2 p-4 border-t text-center bg-gray-500 text-white'>
        <p>Developed by <Link href={'https://tanvirahmmed.vercel.app'} className='font-semibold'>Tanvir Ahmmed</Link></p>
        
      
    </footer>
  )
}

export default Footer
