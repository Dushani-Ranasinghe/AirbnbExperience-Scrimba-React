import React from 'react'
import Card1 from "../images/card 1.jpeg"
import Star from "../images/star.png"
import "../styles/Card.css"

function Card() {
  return (
    <div className='Card'>
        <div className='card-container'>
            <img className='card1' src={Card1} alt="card1"/>
            <div className='card-stat'>
                <img src={Star} alt="voting_icon" className='voting_icon'/>
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <div className='card-info'>
            <p>Life lessons with Katie Zaferes</p>
            <p className='cost'><b>From $136</b> / person</p>
            </div>
        </div>
    </div>
  )
}

export default Card