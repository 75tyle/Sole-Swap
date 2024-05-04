import React from 'react'
import arrowtrend_icon from '../Assets/arrow-trend-up-solid (1).svg'
// import add_icon from '../Assets/square-plus-regular (1).svg'
import user_icon from '../Assets/user-regular (1).svg'
// import authenticate_icon from '../Assets/check-double-solid.svg'
import './FooterNavbar.css'
import { Link } from 'react-router-dom'

const FooterNavbar = () => {
  return (
    <div className='footernavbar'>
      <div className="home">
        <Link to={'/'} style={{textDecoration: 'none',display:'flex',flexDirection:'column',color:'black',alignItems:'center'}}>
            <img src={arrowtrend_icon} alt="" />
            <span>Home</span></Link>
      </div>
      {/* <div className="listing">
        <Link to={'/listing'} style={{textDecoration: 'none',display:'flex',flexDirection:'column',color:'black',alignItems:'center'}}>
            <img src={add_icon} alt="" />
            <span>Listing</span></Link>
      </div>
      <div className="authenticate">
        <Link to={'/auth'} style={{textDecoration: 'none',display:'flex',flexDirection:'column',color:'black',alignItems:'center'}}>
            <img src={authenticate_icon} alt="" />
            <span>authenticate</span></Link>
      </div> */}
      <div className="profile">
        <Link to={'/profile'} style={{textDecoration: 'none',display:'flex',flexDirection:'column',color:'black',alignItems:'center'}}>
            <img src={user_icon} alt="" />
            <span>Profile</span></Link>
      </div>
    </div>
  )
}

export default FooterNavbar;
