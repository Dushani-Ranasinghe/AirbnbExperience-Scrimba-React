import React from 'react'
import Card1 from "../images/card 1.jpeg"
import "../styles/Card.css"

function Card() {
  return (
    <div className='Card'>
        <div className='card-container'>
            <div className='card-img-container'>
            <img className='card1' src={Card1} alt="card1"/>
            </div>
            <div className='card-info-container'>

            </div>
        </div>
    </div>
  )
}

export default Card