import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [testEmail , setTestEmail] = useState(false);
  const [testPassword , setTestPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Step 1: Request CSRF token from the server
      axios.get('http://127.0.0.1:8000/api/users', {
        withCredentials: true,
    }).then(response => {
        if(response.data.length > 0){
          if(response.data.some(user => user.email === email)){
            setTestEmail(true);
            console.log("pass",response.data[1]['email']);
          }
          if(response.data.some(user => user.password === password)){
            setTestPassword(true);
            
            console.log("pass",response.data[1]['email']);
          }
          if(testEmail && testPassword){
            setRedirect(true);
          }
          else{
            console.log('erroooorrr');
            testEmail === false ? setError("Email not match ")
                                : testPassword === false ? setError("Password not match")
                                : setError("Unexpected error");
          }
        }
    }).catch(error => {
        console.error(error);
    });

      
      /*const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true } // Ensure credentials (cookies) are included
      );

      const { user, role } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", role);*/

      
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("Invalid email or password");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (redirect) {
    return <Navigate to="/teacher-dashboard" />;
  }

  return (
    <div className="login-wrapper">
      <div className="login-illustration">
        <img src="https://i.postimg.cc/yYwsHm4Z/pfe.jpg" alt="Illustration" />
      </div>
      <div className="login-form-container">
        <h1>Welcome back!</h1>
        <p>Please enter your details</p>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember for 30 days
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
          <button type="button" className="login-google">
            Log in with Google
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
