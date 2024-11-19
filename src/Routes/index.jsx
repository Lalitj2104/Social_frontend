import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import LoadingPage from "../Components/Loading/Loading.jsx";
import LoginOtp from "../pages/Otp/LoginOtp.jsx";
import VerifyOtp from "../pages/Otp/VerifyOtp.jsx";


const Path = () => {

  const [loading,setLoading] =useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
    
  },[])

  useEffect(()=>{

  },[])

  return <div>
    <Router>
    {loading ?
      <LoadingPage/>
    :
    (<Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/> 
            <Route path="/login/:id" element={<LoginOtp/>}/>
            <Route path="/verify/:id" element={<VerifyOtp/>} />
        </Routes>)
    }
        
    </Router>
  </div>;
};

export default Path;
