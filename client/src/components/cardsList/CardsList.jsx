import { getCards } from "../../../services/cardsAPI";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import { CardsContainer, CardItems, Button, ButtonsContainer } from "./cardsList.styles";
import ColorSelection from "../colorSelection/ColorSelection";

function CardsList() {
  const [cardsList, setCardsList] = useState([]);
  const [updateList, setUpdateList] = useState(false)
  const [chosenColor, setChosenColor] = useState('#597d7c')

  useEffect(() => {
    getCards().then((cards) => {
      setCardsList(() => {
        return [...cards.data];
      });
    });
  }, [updateList]);

  return (
    <CardsContainer>
      <ButtonsContainer>
      <Button>+ add new</Button>
      <ColorSelection setChosenColor={setChosenColor}/>
      </ButtonsContainer>
      <CardItems>
        {cardsList.map((card) => {
          return <Card key={card._id} card={card} setUpdateList={setUpdateList} chosenColor={chosenColor}/>;
        })}
      </CardItems>
    </CardsContainer>
  );
}

export default CardsList;
