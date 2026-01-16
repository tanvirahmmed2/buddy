'use client'
import axios from "axios";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const CompleteTask = ({id}:{id:string}) => {
  const completeTask= async()=>{
    try {
      const response= await axios.put('/api/task/status', {id, status:'completed'}, {withCredentials:true})
      alert(response.data.message)
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
