'use client'
import { ITask } from "@/lib/models/task";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext()

const ContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [tasks, setTasks] = useState<ITask[]>([])

    const fetchTask = async () => {
        try {
            const response= await axios.get('/api/task', {withCredentials:true})
            setTasks(response.data.payload)
        } catch (error:any) {
            console.log(error)
            setTasks([])
        }
    }

    useEffect(()=>{fetchTask()},[])

    const contextValues = {
        tasks, fetchTask
    }
    return <Context.Provider value={contextValues}>
        {children}
    </Context.Provider>

}

export default ContextProvider