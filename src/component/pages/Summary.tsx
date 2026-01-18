'use client'
import { useEffect, useState } from 'react'
import StatusChart from './StatusChart'
import axios from 'axios'


export default function Summary() {
    const [stats, setStats] = useState({ pending: 0, completed: 0, expired: 0 })
    

   useEffect(()=>{
    const fetchStats=async()=>{
        try {
            const response= await axios.get('/api/task/stats', {withCredentials:true})
            setStats(response.data.payload)
        } catch (error:any) {
            setStats({ pending: 0, completed: 0, expired: 0 })
            console.log(error)
            
        }
    }
    fetchStats()
   },[])


    return (
        <div className="p-8">
            <h2 className="text-xl font-bold mb-4 text-center">Task Distribution</h2>
            <StatusChart
                pending={stats.pending} 
                completed={stats.completed} 
                expired={stats.expired} 
            />
        </div>
    )
}