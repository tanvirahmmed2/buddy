import axios from 'axios';
import React from 'react'
import { MdCancelPresentation } from "react-icons/md";

const CancelTask = ({id}:{id:string}) => {
    const cancelTask= async()=>{
        try {
            const response= await axios.put('/api/task/cancel', {id}, {withCredentials:true})
            alert(response.data.message)
        } catch (error:any) {
            console.log(error)
            alert(error?.response?.data?.message || 'Failed to cancel task')
            
        }
    }
  return (
    <button onClick={cancelTask}><MdCancelPresentation/></button>
  )
}

export default CancelTask
