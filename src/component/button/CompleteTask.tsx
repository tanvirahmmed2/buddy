'use client'
import axios from "axios";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import {  useTaskContext } from "../context/Context";

const CompleteTask = ({id}:{id:string}) => {

  const {fetchPendingTask}=useTaskContext()
  const completeTask= async()=>{
    try {
      const response= await axios.put('/api/task/status', {id, status:'completed'}, {withCredentials:true})
      alert(response.data.message)
      fetchPendingTask()
    } catch (error:any) {
      console.log(error)
      alert(error?.response?.data?.message || 'Failed to complete task')
      
    }
  }
  return (
    <button onClick={completeTask} className='cursor-pointer'><IoCheckmarkDoneCircleOutline/></button>
  )
}

export default CompleteTask
