import mongoose from "mongoose"


const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log('Successfully connected to database')
    } catch (error:any) {
        console.log(error)
        
    }
}

export default connectDB