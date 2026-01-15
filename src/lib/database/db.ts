import mongoose from "mongoose"
import { MONGO_URL } from "./secret"


const connectDB= async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log('Successfully connected to database')
    } catch (error:any) {
        console.log(error)
        
    }
}

export default connectDB