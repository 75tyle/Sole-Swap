import React from 'react'
import Hero from '../Components/Hero/Hero'
import Searchbar from '../Components/Searchbar/Searchbar'
import './CSS/MainPage.css'
import ListedProducts from '../Components/ListedProducts/ListedProducts'

const MainPage = () => {
  return (
    <div className='mainpage'>
      <Searchbar />
      <Hero />
      <ListedProducts />
    </div>
  )
}

export default MainPage
