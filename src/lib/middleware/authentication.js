import { cookies } from "next/headers"
import jwt  from 'jsonwebtoken'
import { JWT_SECRET } from "../database/secret"
import User from "../models/user"




export async function isLogin() {
    try {
        const token= (await cookies()).get('user_token')?.value
        if(!token) return {success:false, message:"Please login"}
        const decoded= jwt.verify(token, JWT_SECRET)
        if(!decoded) return {success:false, message:'jwt authentication failed'}
        const user= await User.findById(decoded.id)
        if(!user) return {success:false, message:'User not found'}
        return {success:true, payload:user}
    } catch (error) {
        return {success:false, message:error.message}
    }
    
}


export async function isAdmin() {
    try {
        const token= (await cookies()).get('user_token')?.value
        if(!token) return {success:false, message:"Please login"}
        const decoded= jwt.verify(token, JWT_SECRET)
        if(!decoded) return {success:false, message:'jwt authentication failed'}
        const user= await User.findById(decoded.id)
        if(!user) return {success:false, message:'User not found'}
        if(user.role!=='admin') return {success:false, message: "You're not and admin"}
        return {success:true, payload:user}
    } catch (error) {
        return {success:false, message:error.message}
    }
    
}