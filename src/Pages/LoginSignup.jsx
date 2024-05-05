import React, { useState } from 'react';
import axios from 'axios';
import './CSS/LoginSignup.css';
import { useNavigate } from "react-router-dom";


const LoginSignup = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      if (isLogin) {
        // Handle login
        console.log('Logging in with:', email, password);
        var loginData = {
          Email:email,
          Password:password
        }
        console.log(loginData);

        axios.post('http://localhost:4011/api/user/login',loginData).then(res =>{
          if(res.data.code === 200){
            localStorage.setItem("isLogin","true")
            navigate("/")
          }else{
            console.log("Something went wrong")
          }
        })
        // var data = await  axios.post('http://localhost:4011/api/user/login',loginData);
        // console.log(data)

      } else {
        // Handle signup
        console.log('Signing up with:', username, email, password);
        var signupData = {
          Name:username,
          Email:email,
          Password:password
        }
        console.log(signupData);
        // var data = axios.post();
        axios.post('http://localhost:4011/api/user/createuser',signupData).then(res =>{
          console.log(res)
        })
        
      }
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    if (!isLogin && !username) {
      errors.username = 'Username is required';
    }
    return errors;
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
          )}
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>{isLogin ? "Don't have an account?" : "Already have an account?"} <span onClick={handleSwitchForm}>{isLogin ? 'Sign Up' : 'Login'}</span></p>
      </div>
    </div>
  );
};

export default LoginSignup;
