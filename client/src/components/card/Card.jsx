import { useState } from "react";
import { deleteCard, patchCard } from "../../../services/cardsAPI";
import { CardItem, DeleteButton } from "./card.styles";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

function Card({ card, setUpdateList }) {
  const [cardUpdate, setCardUpdate] = useState({
    text: "",
  });

  const date = new Date(card.date);
  const timeAgo = new TimeAgo("en-US");
  const formattedDate = timeAgo.format(date);

  const handleDelete = (id) => {
    deleteCard(id).then(() => {
      setUpdateList(true);
    });
  };

  const handleUpdate = (id, e) => {
    setCardUpdate({ text: e.target.innerText });

    if (card.text !== e.target.innerText) {
      patchCard(id, cardUpdate).then((result) => {
        setUpdateList(true);
      });
    }
  };

  return (
    <CardItem>
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
