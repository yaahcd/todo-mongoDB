import { useState } from "react";
import { Form, FormContainer, MainContainer } from "./addCard.styles";
import { postCards } from '../../../services/cardsAPI'

function AddCard({ chosenColor, handleAddCard, setUpdateList }) {
  const [newCard, setNewCard] = useState({
    text: "",
  });

  const handleChange = (e) => {
    setNewCard(() => {
      return { text: e.target.value };
    });
  };

  const handleClick = () => {
    postCards(newCard).then((result) => {
        handleAddCard(false);
        setUpdateList(true);
    });
  };

  return (
    <>
      <MainContainer>
        <FormContainer color={chosenColor}>
          <button onClick={handleAddCard}>&#10005;</button>
          <Form>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleClick}>+ add new</button>
          </Form>
        </FormContainer>
      </MainContainer>
    </>
  );
}

export default AddCard;
