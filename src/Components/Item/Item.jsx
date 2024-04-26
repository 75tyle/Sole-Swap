import React from 'react'
import './Item.css'
import product_img from '../Assets/Nike-Dunk-SB-Low-Black-New-Slate.png'
import { Link } from 'react-router-dom'

const Item = () => {
  return (
    <div className='item'>
      <Link to={'/product'} style={{textDecoration: 'none',display:'flex',flexDirection:'column',color:'black',alignItems:'center'}} >
        <img onClick={window.scrollTo(0,0)} src={product_img} alt="" />
        <p>Nike-Dunk-SB-Low-Black-New-Slate</p>
      <div className="highestbid"><button>Highest Bid $599</button></div></Link>
    </div>
  )
}

export default Item
