import { isLogin } from '@/lib/helper/middleware'
import Link from 'next/link'
import LogoutButton from '../button/LogoutButton'

const Navbar = async () => {
  const auth = await isLogin()
  return (
    <div className='w-full relative'>
      <nav className='w-full h-12 bg-black  text-white flex flex-row items-center justify-around px-4'>
        <Link href={'/'} className='text-2xl font-semibold'>Next</Link>
        <div className='w-auto flex flex-row items-center justify-center gap-1'>
          {
            auth.success ? <div className='w-auto flex flex-row items-center justify-center gap-1'>
              <Link href={'/task'} className='px-4 h-12 w-auto flex items-center justify-center hover:bg-white/30 cursor-pointer'>Task</Link>
              <Link href={'/profile'} className='px-4 h-12 w-auto flex items-center justify-center hover:bg-white/30 cursor-pointer'>Profile</Link>
              <LogoutButton/>
            </div> : <div className='w-auto flex flex-row items-center justify-center gap-1'>
              <Link href={'/login'} className='px-4 h-12 w-auto flex items-center justify-center hover:bg-white/30 cursor-pointer'>Login</Link>
              <Link href={'/register'} className='px-4 h-12 w-auto flex items-center justify-center hover:bg-white/30 cursor-pointer'>Register</Link>
            </div>
          }


        </div>

      </nav>

    </div>
  )
}

export default Navbar
