import { CardItem } from "./card.styles"

function Card({card}) {

  return (
    <CardItem>
      <p>{card.text}</p>
      <p>{card.date}</p>
    </CardItem>
  )
}

export default Card
