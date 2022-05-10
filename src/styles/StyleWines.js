import styledComponents from "styled-components";


export const StyledWinesContainer = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
`;

export const StyledCards = Styled.div`
    width: 150px;
    height: 150px;
    border: 4px solid black;
    margin: 25%;
    padding: 25%;
    background-color: antiquewhite;
`;