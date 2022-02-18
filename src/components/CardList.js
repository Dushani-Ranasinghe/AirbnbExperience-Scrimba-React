import React from 'react'
import CardItem from './CardItem'
import Katie from "../images/katie.png"
import Bride from "../images/bride.jpg"
import Bike from "../images/bike.jpg"
import Yoga from "../images/yoga.jpg"
import Paint from "../images/paint.jpg"
import "../styles/Card.css"

function CardList() {
  return (
    <div className="CardList">
        <div className='card-list-container'>
        <CardItem
        image={Katie}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
        />
            <CardItem
        image={Bride}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
        />
            <CardItem
        image={Bike}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
        />
            <CardItem
        image={Yoga}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
        />
        <CardItem
        image={Paint}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
        />
        </div>
    </div>
  )
}

export default CardList