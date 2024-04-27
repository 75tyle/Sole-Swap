import React from 'react'
import './CSS/Listing.css'
import AddProduct from '../Components/AddProduct/AddProduct'

const Listing = () => {
  return (
    <div className='listing_page'>
      <h1>Add Products</h1>
      <AddProduct />
    </div>
  )
}

export default Listing
