import mongoose from "mongoose";
import { MONGO_URL } from "./secret";


const ConnectDB=async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log('Succcessfully connected mongoDB')
    } catch (error) {
        console.log(error)
       
    }
}

export default ConnectDB