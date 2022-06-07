import React from 'react';

import styled from 'styled-components';
import Button from './Button';

export const myList = [
  'SOBRE NOSOTROS',
  'NUESTROS VINOS',
  'COSECHAS',
  'COMPRAR',
];

const StyledLinks = styled.ul`
  margin: 15px 0 15px;
  order: 3;
  display: none;
  list-style: none;
  color: ${props => props.theme.color.tertiary};
  li:hover {
    cursor: pointer;
    color: white;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const Links = (props) => {
  return (
    <StyledLinks>
      {myList.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
      <Button type='cart' onClick={props.onClick} counter={props.counter} />
    </StyledLinks>
  );
};

export default Links;
