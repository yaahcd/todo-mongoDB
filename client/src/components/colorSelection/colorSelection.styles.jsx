import styled from "styled-components";

export const ColorsContainer = styled.div`
  grid-column-start: 4;
  margin: 5px 25px;
  justify-items: end;
  align-items: end;
`;

export const ColorButton = styled.button`
  margin: 0px 5px;
  padding: 10px;
  border: solid 1.5px #f0ddc0;
  border-radius: 55%;
  cursor: pointer;
  font-size: 18px;
  background-color: ${(props) => props.color};
`;
