import React from 'react'

export const metadata={
    title:'Login',
    description:'Login page'
}

const LoginLayout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default LoginLayout
