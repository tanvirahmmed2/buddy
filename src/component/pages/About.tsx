import React from 'react'

const About = () => {
  return (
    <div className='w-full h-150 p-2 flex items-center justify-center gap-2 bg-indigo-300 text-white'>
        <div className='w-auto max-w-200 flex flex-col gap-4'>
            <p className='px-2 border-b border-white'>Welcome to</p>
            <h1 className='text-3xl font-semibold'>Buddy</h1>
            <p>Designed to help individuals and teams stay organized, focused, and productive in a simple and stress-free way. We believe managing tasks should feel clear and motivating, not overwhelming. That’s why we built a platform that keeps everything you need in one place, without unnecessary complexity.</p>
            <p>Whether you’re planning your daily to-do list, managing long-term projects, or collaborating with a team, our task manager adapts to your workflow. You can easily create tasks, set priorities, track progress, and stay on top of deadlines with a clean and intuitive interface.</p>
            <p>Our mission is simple: to make task management smarter, more efficient, and accessible to everyone. As we continue to improve and add new features, we remain committed to building a tool that genuinely helps you work better every day.</p>
            <p>Stay organized. Stay productive. Stay in control.</p>
        </div>

      
    </div>
  )
}

export default About
