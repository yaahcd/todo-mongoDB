import { getCards } from "../../../services/cardsAPI";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import { CardsContainer, CardItems } from "./cardsList.styles";

function CardsList() {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    getCards().then((cards) => {
      setCardsList((current) => {
        return [...cards.data];
      });
    });
  }, []);

  return (
    <CardsContainer>
      <CardItems>
        {cardsList.map((card) => {
          return <Card key={card._id} card={card} />;
        })}
      </CardItems>
    </CardsContainer>
  );
}

export default CardsList;
