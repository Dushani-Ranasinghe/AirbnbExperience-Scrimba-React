import React from 'react'
import HeroImg from '../images/hero-img.png'
import "../styles/Hero.css"

function Hero() {
  return (
    <div className='Hero'>
      <div className='hero-container'>
      <div className='hero-img-container'>
      <img className="Hero-img" src={HeroImg} alt="HeroImage"/>
      </div>
      <div className='hero-content'>
        <h1>Online Experinece</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      
      </div>
      </div>
    </div>
  )
}

export default Hero