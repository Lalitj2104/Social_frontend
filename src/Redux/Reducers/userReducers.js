import {createAction,createReducer} from '@reduxjs/toolkit'
import { useContext } from 'react';

const initialState={

}

const userLoginRequest = createAction('USER_LOGIN_REQUEST');
const userLoginSuccess=createAction('USER_LOGIN_SUCCESS');
const userLoginFailure =createAction('USER_LOGIN_FAILURE');

const userRegisterRequest = createAction('USER_REGISTER_REQUEST');
const userRegisterSuccess=createAction('USER_REGISTER_SUCCESS');
const userRegisterFailure =createAction('USER_REGISTER_FAILURE');


const LoginOtpRequest = createAction('LOGIN_OTP_REQUEST');
const LoginOtpSuccess=createAction('LOGIN_OTP_SUCCESS');
const LoginOtpFailure =createAction('LOGIN_OTP_FAILURE');

const RegisterOtpRequest = createAction('REGISTER_OTP_REQUEST');
const RegisterOtpSuccess=createAction('REGISTER_OTP_SUCCESS');
const RegisterOtpFailure =createAction('REGISTER_OTP_FAILURE');

const ResendLoginOtpRequest=createAction('RESEND_LOGIN_OTP_REQUEST');
const ResendLoginOtpSuccess=createAction('RESEND_LOGIN_OTP_SUCCESS') ;
const ResendLoginOtpFailure=createAction('RESEND_LOGIN_OTP_FALIURE');

const ResendRegisterOtpRequest=createAction('RESEND_REGISTER_OTP_REQUEST');
const ResendRegisterOtpSuccess=createAction('RESEND_REGISTER_OTP_SUCCESS') ;
const ResendRegisterOtpFailure=createAction('RESEND_REGISTER_OTP_FALIURE');


const clearError= createAction("CLEAR_ERROR");
const clearMessage=createAction("CLEAR_MESSAGE");

export const userAuthReducer =createReducer(initialState,(builder)=>{
    builder
    .addCase(userLoginRequest,(state)=>{
        state.loading=true;
    })
    .addCase(userLoginSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload.message;
        state.id=action.payload.id;
    })
    .addCase(userLoginFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    })
    .addCase(LoginOtpRequest,(state)=>{
        state.loading=true;
    })
    .addCase(LoginOtpSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        state.isAuthenticated=true;
    })
    .addCase(LoginOtpFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
    })
    .addCase(userRegisterRequest,(state)=>{
        state.loading=true;
    })
    .addCase(userRegisterSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload.message;
        state.id=action.payload.id;
    })
    .addCase(userRegisterFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    })
    .addCase(RegisterOtpRequest,(state)=>{
        state.loading=true;
    })
    .addCase(RegisterOtpSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        state.isAuthenticated=true;
    })
    .addCase(RegisterOtpFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
    })
    .addCase(ResendLoginOtpRequest,(state)=>{
        state.loading=true;
    })
    .addCase(ResendLoginOtpSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload
    })
    .addCase(ResendLoginOtpFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })
    .addCase(ResendRegisterOtpRequest,(state)=>{
        state.loading=true;
    })
    .addCase(ResendRegisterOtpSuccess,(state,action)=>{
        state.loading=false;
        state.message=action.payload
    })
    .addCase(ResendRegisterOtpFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })
    .addCase(clearError,(state)=>{
        state.error=null;
    })
    .addCase(clearMessage,(state)=>{
        state.message=null;
    })

})
