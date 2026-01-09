import React from 'react'

export const metadata={
    title:'Chat',
    description:'Chat page'
}

const ChatLayout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ChatLayout
