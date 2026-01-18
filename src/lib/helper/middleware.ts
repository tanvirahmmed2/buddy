import { cookies } from "next/headers"
import jwt, { JwtPayload } from 'jsonwebtoken'
import User from "../models/user"

interface AuthResponse {
  success: boolean;
  message: string;
  payload?: any
}

interface DecodedToken extends JwtPayload {
  id: string;
}

export async function isLogin(): Promise<AuthResponse> {
    try {
        const token = (await cookies()).get('user_token')?.value
        if(!token){
            return {success:false, message:'Please login'}
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;

        const user = await User.findById(decoded.id)
        if(!user){
            return {success:false, message:'User not found'}
        }
        return {success:true, message:'Login verified', payload:user}

    } catch (error:any) {
        return {success:false, message:error.message}
    }
}