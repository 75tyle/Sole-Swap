import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
  console.log(props)
  const navigate = useNavigate();
  const isUserCheck = () =>{
    if(localStorage.getItem("isLogin")){
      localStorage.removeItem("isLogin")
      navigate("/login")
    }else{
      navigate("/login")
    }
  }
  return (
    <div className='sidebar' id={props.sidebar === true ? "show": "hide"}>
        <ul className='sidebar_list'>
        <li onClick={() => {navigate("/account")}}>
          <div>My Account</div>
        </li>
          <li onClick={() =>{isUserCheck()}}>{localStorage.getItem("isLogin")?<div>Logout</div> :<div>Login</div>}</li>
        </ul>
    </div>
  )
}

export default Sidebar
