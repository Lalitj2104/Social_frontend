import axios from 'axios';
import { BACKEND_URL } from '../../constants/url';


const URL=BACKEND_URL+"api/v1/user";


export const loginUser=(email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"USER_LOGIN_REQUEST"
        })

        const {data}=await axios.post(`${URL}/login`,{email,password},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true  //security purpose
        });
        dispatch({
            type:"USER_LOGIN_SUCCESS",
            payload:{
                message:data.message,
                id:data.data
            }
        })
    } catch (error) {
        dispatch({
            type:"USER_LOGIN_FAILURE",
            payload:error.response?.data?.message
        })
    }
}

export const verifyLoginOtp=(id,otp)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LOGIN_OTP_REQUEST"
        })
        const data= await axios.post(`${URL}/login/verify/${id}`,{otp},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true 
        });

        dispatch({
            type:"LOGIN_OTP_SUCCESS",
            payload:data.message,
        })

        
    } catch (error) {
        dispatch({
            type:"LOGIN_OTP_FAILURE",
            payload:error?.response?.data?.message
        })
    }
} 

export const registerUser=(details)=>async(dispatch)=>{
    try {
        dispatch({
            type:"USER_REGISTER_REQUEST"
        })
        const{data} =await axios.post(`${URL}/register`,details,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true  //security purpose
        })
        dispatch({
            type:"USER_REGISTER_SUCCESS",
            payload:{
                message:data.message,
                id:data.data
            }
        })
        
    } catch (error) {
        dispatch({
            type:"USER_REGISTER_FAILURE",
            payload:error?.response?.data?.message
        })
    }
}