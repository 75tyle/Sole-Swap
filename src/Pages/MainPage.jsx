import React from 'react'
import Hero from '../Components/Hero/Hero'
import Searchbar from '../Components/Searchbar/Searchbar'
import './CSS/MainPage.css'

const MainPage = () => {
  return (
    <div className='mainpage'>
      <Searchbar />
      <Hero />
    </div>
  )
}

export default MainPage
