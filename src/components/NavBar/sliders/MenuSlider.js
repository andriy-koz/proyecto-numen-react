import React from 'react'

import styled from 'styled-components';
import { StyledSlider } from './StyledSlider';
import { myList } from '../Links';

const StyledMenu = styled(StyledSlider)`
  div {
    color: ${props => props.theme.color.tertiary};
    display: grid;
    gap: 20px;
    a {
      color: #fff;
    }
  }
`;

const MenuSlider = props => {
  return (
    <StyledMenu opened={props.opened}>
      <div>
        {myList.map((link, index) => (
          <a href={link[1]} key={index}>{link[0]}</a>
        ))}
      </div>
    </StyledMenu>
  );
};

export default MenuSlider;
