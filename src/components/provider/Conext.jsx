'use client'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext()

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/user/islogin', {withCredentials:true})
                setUser(response.data.payload)
            } catch (error) {
                console.log(error)
                setUser(null)
            }
        }
        fetchUser()
    }, [])



    const contextValue = {user, }

    return <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
}


export default ContextProvider
