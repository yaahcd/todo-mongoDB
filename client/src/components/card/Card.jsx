import { deleteCard } from "../../../services/cardsAPI"
import { CardItem, DeleteButton, UpdateButton } from "./card.styles"
import TimeAgo from 'javascript-time-ago';
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

function Card({card, setUpdateList}) {

    const date = new Date(card.date)
    const timeAgo = new TimeAgo("en-US");
    const formattedDate = timeAgo.format(date)

    const handleDelete = (id) => {
        deleteCard(id).then(() => {
            setUpdateList(true)
        })

    }

    const handleUpdate = (id) => {

    }

  return (
    <CardItem>
    <UpdateButton>&#9998;</UpdateButton>
    <DeleteButton onClick={() => handleDelete(card._id)}>&#10005;</DeleteButton>
      <p>{formattedDate}</p>
      <h3>{card.text}</h3>
      <br/><br/>
    </CardItem>
  )
}

export default Card
