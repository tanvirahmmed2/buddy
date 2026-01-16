'use client'
import { ITask } from "@/lib/models/task";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext()

const ContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [pendingTasks, setPendingTasks] = useState<ITask[]>([])

    const fetchPendingTask = async () => {
        try {
            const response= await axios.get('/api/task', {withCredentials:true})
            setPendingTasks(response.data.payload)
        } catch (error:any) {
            console.log(error)
            setPendingTasks([])
        }
    }

    useEffect(()=>{fetchPendingTask()},[])

    const contextValues = {
        pendingTasks, fetchPendingTask
    }
    return <Context.Provider value={contextValues}>
        {children}
    </Context.Provider>

}

export default ContextProvider