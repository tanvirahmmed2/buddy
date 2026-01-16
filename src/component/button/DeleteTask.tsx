'use client'
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteTask = ({id}:{id:string}) => {
  const deleteTask=async()=>{
    try {
      const response= await axios.delete('/api/task', {data:{id}, withCredentials:true})
      alert(response.data.message)
    } catch (error:any) {
      console.log(error)
      alert(error?.response?.data?.message || 'Failedf to delete task')
      
    }
  }
  return (
    <button onClick={deleteTask}><RiDeleteBin6Line/></button>
  )
}

export default DeleteTask
