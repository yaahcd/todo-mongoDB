import styled from "styled-components";

export const CardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const CardItems =  styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
overflow: auto;
`
export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #f0ddc0;
  font-size: 18px;
  font-family: "Croissant One", cursive;
  justify-self: start;
  text-align: start;
  margin-left: 25px;
`;

export const ButtonsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 50px;
justify-items: end;
`