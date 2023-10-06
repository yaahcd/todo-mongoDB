import axios from "axios";

const apiUrl = "http://localhost:9000/api/cards/";

export const getCards = () => {
  return axios.get(apiUrl)
};

export const postCards = (card) => {
  return axios.post(apiUrl, card);
};

export const patchCard = (id, card) => {
  return axios.patch(`${apiUrl}/${id}`, card);
};

export const deleteCard = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};
