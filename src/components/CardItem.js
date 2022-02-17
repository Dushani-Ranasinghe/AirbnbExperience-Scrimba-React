import React from 'react'
import Star from "../images/star.png"
import "../styles/Card.css"

function CardItem(props) {
  return (
    <div>
     <div className='card-container'>
    <img className='card1' src={props.image} alt="card1"/>
    <div className='card-stat'>
        <img src={Star} alt="voting_icon" className='voting_icon'/>
        <span>{props.rating}</span>
        <span>{props.reviewCount} • </span>
        <span>{props.country}</span>
    </div>
    <div className='card-info'>
    <p>{props.title}</p>
    <p className='cost'><b>From ${props.price}</b> / person</p>
    </div>
</div>
</div>
  )
}

export default CardItem