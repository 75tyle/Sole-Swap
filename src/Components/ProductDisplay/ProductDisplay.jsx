import React from 'react'
import './ProductDisplay.css'
import product_img from '../Assets/Nike-Dunk-SB-Low-Black-New-Slate.png'

const ProductDisplay = ({ product }) => {
  return (
    <div className='productdisplay'>
      <div className="productdisplay_left">
      <img src={product_img} alt="" />
      <h1>Travis sccot 100s</h1>
      <p>sdfghjkl dfghjk ertyu jjna</p>
      </div>
      <hr />
      <div className="productdisplay_right">
        <div className="currentbid">
          <h1>Current Bid - $99</h1>
        </div>
        <div className="place_bid">
          <input type="number" placeholder='Place bid'/>
          <button>Bid</button>
        </div>
        <div className="listedtime">
          <h1>Ends in 1:12:30:21</h1>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay