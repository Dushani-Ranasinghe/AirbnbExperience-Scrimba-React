import React from 'react'
import HeroImg from '../images/hero-img.png'
import "../styles/Hero.css"

function Hero() {
  return (
    <div className='Hero'>
      <div className='hero-img-container'>
      <img className="Hero-img" src={HeroImg} alt="HeroImage"/>
      <div className='hero-content'>
        
      </div>
      </div>
    </div>
  )
}

export default Hero