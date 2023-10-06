import axios from "axios";

const apiUrl = "/api/cards";

exports.getCards = () => {
  return axios.get(apiUrl);
};

exports.postCards = (card) => {
  return axios.post(apiUrl, card);
};

exports.patchCard = (id, card) => {
  return axios.patch(`${apiUrl}/${id}`, card);
};

exports.deleteCard = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};
