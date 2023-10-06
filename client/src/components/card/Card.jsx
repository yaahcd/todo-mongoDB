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
    deleteCard(id).then(() => {
      setUpdateList(true);
    });
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
    <CardItem chosenColor={chosenColor}>
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
