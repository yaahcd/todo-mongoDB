import styled from "styled-components";

export const CardItem = styled.div`
  position: relative;
  background-color: #597d7c;
  margin: 10px;
  padding: 20px 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.74);
  overflow: hidden;

  h3 {
    padding-top: 20px;
    text-align: center;
    font-weight: 400;
  }

  p {
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: bold;
    color: #650000;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #650000;
  background: none;
  border: none;

  &:hover {
    color: #000;
  }
`;

export const UpdateButton = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #650000;
  background: none;
  border: none;

  &:hover {
    color: #000;
  }
`;
