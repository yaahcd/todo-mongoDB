import styled, { keyframes } from "styled-components";

const cardsContainerLoad = keyframes`
from {
   opacity: 0;
      }
to {
  opacity: 1;
      }
    }
`;

export const CardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  animation-name: ${cardsContainerLoad};
  animation-durpx;ation: 1s;
`;

export const CardItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  overflow: auto;
`;
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
  grid-column-start: 1;
  grid-column-end: 3;

  &:hover{
    font-size: 19px;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
  justify-items: end;
  @media (max-width: 800px) {
    column-gap: 0px;
  }
  @media (max-width: 460px) {
    display: flex;
    column-gap: 0px;
  }
`;
