import { useState } from "react";
import { Form, FormContainer, MainContainer } from "./addCard.styles";
import { postCards } from "../../../services/cardsAPI";

function AddCard({ chosenColor, handleAddCard, setUpdateList }) {
  const [newCard, setNewCard] = useState({
    text: "",
  });

  const handleChange = (e) => {
    setNewCard(() => {
      return { text: e.target.value };
    });
  };

  const handleClick = (e) => {
    if (e.target.dataset.id === "closeContainer") {
      handleAddCard();
    }
  };

  const handleAddNew = () => {
    if (newCard.text.length) {
      postCards(newCard).then((result) => {
        handleAddCard(false);
        setUpdateList(true);
      });
    }
  };

  return (
    <>
      <MainContainer data-id="closeContainer" onClick={handleClick}>
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
            <button onClick={handleAddNew}>+ add new</button>
          </Form>
        </FormContainer>
      </MainContainer>
    </>
  );
}

export default AddCard;
