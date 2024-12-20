import React, { useEffect, useState } from "react";
import "../../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Actions/userActions";
import toastOptions from "../../constants/toast";
import { toast } from "react-toastify";

const Login = () => {
  const spans = Array.from({ length: 128 });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message, error, id, isAuthenticated } = useSelector(
    (state) => state.userAuth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (message) {
      console.log(message);
      toast.success(message, toastOptions);
      dispatch({
        type: "CLEAR_MESSAGE",
      });
      navigate(`/login/${id}`);
    }
    if (error) {
      console.log(error);
      toast.error(error, toastOptions);
      dispatch({ type: "CLEAR_ERROR" });
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, message, error, isAuthenticated, id, navigate]);

  return (
    <section>
      <div className="login-cont">
        {spans.map((_, index) => (
          <span key={index} className="span"></span>
        ))}
        <div className="signin">
          <div className="content">
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputBx">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <i>Email</i>
              </div>
              <div className="inputBx">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i>Password</i>
              </div>
              <div className="links">
                <Link to="/forgot-password">Forgot Pasword?</Link>
                <Link to="/register">Sign Up</Link>
              </div>
              <div className="inputBx">
                <button type="submit" disabled={loading}>
                  {loading === true ? (
                    <span className="spinner"></span>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
