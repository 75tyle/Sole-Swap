import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import Cart_icon from '../Assets/cart-shopping-solid (1).svg';
import Nav_menu from '../Assets/bars-solid (1).svg';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setSidebarOpen(false); // Close the sidebar when clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Sidebar sidebar={sidebarOpen} />
      <div ref={navRef} className='navbar'>
        <div className="nav-menu" onClick={() => { setSidebarOpen(true) }}>
          <img src={Nav_menu} alt="" />
        </div>
        <div className="nav-logo">
          <h1>Sole-Swap</h1>
        </div>
        <div className="nav-cart">
          <img src={Cart_icon} alt="" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
