import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import LoadingPage from "../Components/Loading/Loading.jsx";
import LoginOtp from "../pages/Otp/LoginOtp.jsx";
import VerifyOtp from "../pages/Otp/VerifyOtp.jsx";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AuthRoute from "./AuthRoute.jsx";
import { loadUser } from "../Redux/Actions/userActions.js";

const Path = () => {

  const dispatch = useDispatch();


  const { userLoading} = useSelector(state => state.userAuth);


  return (
    <div>
      <Router>
        {userLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />

            <Route
              path="/register"
              element={
                <AuthRoute>
                  <Register />
                </AuthRoute>
              }
            />

            <Route
              path="/login/:id"
              element={
                <AuthRoute>
                  <LoginOtp />
                </AuthRoute>
              }
            />

            <Route
              path="/verify/:id"
              element={
                <AuthRoute>
                  <VerifyOtp />
                </AuthRoute>
              }
            />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default Path;