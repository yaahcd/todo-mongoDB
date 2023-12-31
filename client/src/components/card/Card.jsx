import { useState } from "react";
import { deleteCard, patchCard } from "../../../services/cardsAPI";
import { CardItem, DeleteButton } from "./card.styles";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

function Card({ card, setUpdateList, chosenColor }) {
  
  const date = new Date(card.date);
  const timeAgo = new TimeAgo("en-US");
  const formattedDate = timeAgo.format(date);

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      deleteCard(id).then(() => {
        setUpdateList(true);
      });
    } else {
      return;
    }
  };

  const handleUpdate = (id, e) => {
    const newText = { text: e.target.innerText };

    if (card.text !== newText.text) {
      patchCard(id, newText).then((result) => {
        setUpdateList(true);
      });
    }

    return;
  };

  return (
    <CardItem color={chosenColor}>
      <DeleteButton onClick={() => handleDelete(card._id)}>
        &#10005;
      </DeleteButton>
      <p>{formattedDate}</p>
      <h3
        contentEditable="true"
        onBlur={(e) => handleUpdate(card._id, e)}
        dangerouslySetInnerHTML={{ __html: card.text }}
      />
    </CardItem>
  );
}

export default Card;
