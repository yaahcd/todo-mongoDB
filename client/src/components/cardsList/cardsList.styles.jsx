import styled from "styled-components";

export const CardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const CardItems =  styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`