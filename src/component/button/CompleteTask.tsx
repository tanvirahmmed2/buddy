'use client'
import axios from "axios";
import { useContext } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { Context } from "../context/Context";

const CompleteTask = ({id}:{id:string}) => {

  const {fetchPendingTask}=useContext(Context)
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
    <button onClick={completeTask}><IoCheckmarkDoneCircleOutline/></button>
  )
}

export default CompleteTask
