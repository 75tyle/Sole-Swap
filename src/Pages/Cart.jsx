import React from 'react'
import CartItems from '../Components/CartItmes/CartItems'
import './CSS/Cart.css'

const Cart = () => {
  return (
    <div className='cart'>
      <CartItems />
      <CartItems />
      <CartItems />
      <CartItems />
    </div>
  )
}

export default Cart
