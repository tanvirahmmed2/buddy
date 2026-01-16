import axios from 'axios';
import React, { useContext } from 'react'
import { MdCancelPresentation } from "react-icons/md";
import { Context } from '../context/Context';

const CancelTask = ({id}:{id:string}) => {

    
      const {fetchPendingTask}=useContext(Context)
    const cancelTask= async()=>{
        try {
            const response= await axios.put('/api/task/cancel', {id}, {withCredentials:true})
            alert(response.data.message)
            fetchPendingTask()
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
