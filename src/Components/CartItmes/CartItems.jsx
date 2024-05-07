import React from 'react'
import './CartItems.css'
import product_img from '../Assets/Nike-Dunk-SB-Low-Black-New-Slate.png'

const CartItems = () => {
  return (
    <div className='cartiems'>
      <div className="maincontainer">
        <div className="item_img"><img src={product_img} alt="" /></div>
        <div className="item_details">
         <div className="item_name"><h1>Travis scoot 300s</h1></div>
         {/* <div className="item_description"><p>asdfghjkxcv wertyuio zxcvb wertyui ertyui sdfghj dfghj</p></div> */}
         <div className="item_price">$89</div>
         <div className="PurchaseBtn"><button>Order Placed</button></div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
