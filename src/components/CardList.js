import React from 'react'
import CardItem from './CardItem'
import Image from "../images/katie.png"

function CardList() {
  return (
    <div>
        <CardItem
        image={Image}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
        />
    </div>
  )
}

export default CardList