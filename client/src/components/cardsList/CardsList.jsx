import { getCards } from "../../../services/cardsAPI";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import {
  CardsContainer,
  CardItems,
  Button,
  ButtonsContainer,
} from "./cardsList.styles";
import ColorSelection from "../colorSelection/ColorSelection";
import AddCard from "../addCard/AddCard";

function CardsList() {
  const [cardsList, setCardsList] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  const [chosenColor, setChosenColor] = useState("#597d7c");
  const [addNewCard, setAddNewCard] = useState(false)

  useEffect(() => {
    getCards().then((cards) => {
      setCardsList(() => {
        return [...cards.data];
      });
    });
  }, [updateList]);

  const handleAddCard = () => {
    setAddNewCard(!addNewCard)
  }

return (
    <CardsContainer>
      <ButtonsContainer>
        <Button onClick={handleAddCard}>+ add new</Button>
        <ColorSelection setChosenColor={setChosenColor} />
      </ButtonsContainer>
      <CardItems>
        {cardsList.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              setUpdateList={setUpdateList}
              chosenColor={chosenColor}
            />
          );
        })}
      </CardItems>
      {addNewCard && (<AddCard chosenColor={chosenColor} handleAddCard={handleAddCard} setUpdateList={setUpdateList}/>)}
    </CardsContainer>


  );
}

export default CardsList;
