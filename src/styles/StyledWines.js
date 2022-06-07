import styled from 'styled-components';

export const StyledWinesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  column-gap: 100px;
  
  width: 100%;
`;

export const StyledCards = styled.div`
  
  width: 150px;
  height: 150px;
  border: 4px solid #500925;
  margin: 20px;
  padding: 20px;
  background-color: antiquewhite;
  img {
    width: 100%;
    height: 100%;
  }
`;
