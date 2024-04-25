import React from 'react'
import './ListedProducts.css'
import Item from '../Item/Item'

const ListedProducts = () => {
  return (
    <div className='listedproducts'>
        <h1>Listed Products</h1> 
        <div className="products">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </div>
  )
}

export default ListedProducts
