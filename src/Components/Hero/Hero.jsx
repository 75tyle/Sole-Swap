import React from 'react'
import './Hero.css'
import hero_img from '../Assets/sneaker-vans.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero_left">
      <h1>Sole-Swap</h1>
      <p>Swap Your Soles, Elevate Your Style</p>
      <button>Bid Now</button>
      </div>
      <div className="hero_right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero;
