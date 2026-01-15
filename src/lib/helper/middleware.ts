import { cookies } from "next/headers"
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../database/secret"
import User from "../models/user"


export async function isLogin() {
    try {
        const token = (await cookies()).get('user_token')?.value
        if(!token){
            return {success:false, message:'Please login'}
        }

        const decoded= jwt.verify(token, JWT_SECRET)

        const user= await User.findById(decoded.id)
        if(!user){
            return {success:false, message:'User not found'}
        }
        return {success:true, message:'Login verified', payload:user}

    } catch (error:any) {
        return {success:false, message:error.message}
        
    }
    
}