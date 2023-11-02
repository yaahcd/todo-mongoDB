import styled from "styled-components";

export const ColorsContainer = styled.div`
  grid-column-start: 4;
  margin: 5px 25px;
  justify-items: end;
  align-items: end;
  @media (max-width: 1050px) {
    display: flex;
  }
`;

export const ColorButton = styled.button`
  margin: 0px 5px;
  padding: 10px;
  border: solid 1.5px #f0ddc0;
  border-radius: 55%;
  cursor: pointer;
  background-color: ${(props) => props.color};

  &:hover {
    padding: 12px;
  }
`;
