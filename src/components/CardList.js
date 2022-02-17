import React from 'react'
import Card from './Card'
import Card1 from "../images/card 1.jpeg"

function CardList() {
  return (
    <div>
        <Card
        img={Card1}
        rating={5.0}
        revieCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="From $136"
        />

    </div>
  )
}

export default CardList