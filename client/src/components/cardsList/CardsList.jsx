import { getCards } from "../../../services/cardsAPI";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import { CardsContainer, CardItems, Button } from "./cardsList.styles";

function CardsList() {
  const [cardsList, setCardsList] = useState([]);
  const [updateList, setUpdateList] = useState(false)

  useEffect(() => {
    getCards().then((cards) => {
      setCardsList((current) => {
        return [...cards.data];
      });
    });
  }, [updateList]);

  return (
    <CardsContainer>
      <Button>+ add new</Button>
      <CardItems>
        {cardsList.map((card) => {
          return <Card key={card._id} card={card} setUpdateList={setUpdateList}/>;
        })}
      </CardItems>
    </CardsContainer>
  );
}

export default CardsList;
