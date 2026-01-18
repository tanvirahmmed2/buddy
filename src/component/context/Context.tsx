'use client'
import { ITask } from "@/lib/models/task";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface TaskContextType {
    pendingTasks: ITask[];
    fetchPendingTask: () => Promise<void>;
}

export const Context = createContext<TaskContextType | undefined>(undefined);

const ContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [pendingTasks, setPendingTasks] = useState<ITask[]>([]);

    const fetchPendingTask = async () => {
        try {
            const response = await axios.get('/api/task/pending', { withCredentials: true });
            setPendingTasks(response.data.payload);
        } catch (error: any) {
            console.log(error);
            setPendingTasks([]);
        }
    };

    useEffect(() => {
        fetchPendingTask();
    }, []);

    const contextValues: TaskContextType = {
        pendingTasks,
        fetchPendingTask
    };

    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useTaskContext must be used within a ContextProvider");
    }
    return context;
};

export default ContextProvider;