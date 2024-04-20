import React from 'react'
import './Searchbar.css'
import search_icon from '../Assets/magnifying-glass-solid (1).svg'
const Searchbar = () => {
  return (
    <div className='searchbar'>
        <div className="searchbar_wrapper">
            <input placeholder='Search' />
            <img src={search_icon} alt="" />
        </div>
    </div>
  )
}

export default Searchbar
