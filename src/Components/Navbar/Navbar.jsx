import React from 'react'
import './Navbar.css'
// import Logo from '../Assets/Sole-Swap.png'
import Cart_icon from '../Assets/cart-shopping-solid (1).svg'
import Nav_menu from '../Assets/bars-solid (1).svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-menu">
        <img src={Nav_menu} alt="" />
      </div>
      <div className="nav-logo">
        <h1>Sole-Swap</h1>
        {/* <img src={Logo} alt="" /> */}
      </div>
      <div className="nav-cart">
        <img src={Cart_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
