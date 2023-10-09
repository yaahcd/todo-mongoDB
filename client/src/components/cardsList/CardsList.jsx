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
import Loading from "../loading/Loading";

function CardsList() {
  const [cardsList, setCardsList] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  const [chosenColor, setChosenColor] = useState("#597d7c");
  const [openCardForm, setOpenCardForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCards().then((cards) => {
      setCardsList(() => {
        return [...cards.data];
      });
      setUpdateList(false);
      setIsLoading(false);
    });
  }, [updateList]);

  const handleAddCard = () => {
    setOpenCardForm(!openCardForm);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CardsContainer>
      <ButtonsContainer>
        <Button onClick={setOpenCardForm}>+ add new</Button>
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
      {openCardForm && (
        <AddCard
          chosenColor={chosenColor}
          handleAddCard={handleAddCard}
          setUpdateList={setUpdateList}
        />
      )}
    </CardsContainer>
  );
}

export default CardsList;
