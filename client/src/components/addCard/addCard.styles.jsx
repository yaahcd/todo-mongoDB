import styled, { keyframes } from "styled-components";

const formopen = keyframes`
from {
   opacity: 0;
      }
to {
  opacity: 1;
      }
    }
`;

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const FormContainer = styled.div`
  margin: 10% auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation-name: ${formopen};
  animation-duration: 1s;
  @media (max-width: 768px) {
    width: 80%;
  }

  button {
    align-self: end;
    border: none;
    background: none;
    font-family: "Croissant One", cursive;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  textarea {
    background-color: #251f1f;
    width: 95%;
    padding: 10px;
    border: 1px solid #black;
    border-radius: 5px;
    margin: 10px 0;
    height: 100px;
    color: #f0ddc0;
  }

  button {
    align-self: center;
    border: none;
    background: none;
    font-family: "Croissant One", cursive;
    font-size: 17px;
    cursor: pointer;
  }
`;

//   &: @media (max-width: 768px) {
//     .modal-box {
//       width: 90%;
//     }
//   }
