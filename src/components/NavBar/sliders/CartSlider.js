import React from 'react';

import styled from 'styled-components';
import { StyledSlider } from './StyledSlider';

const StyledCart = styled(StyledSlider)`
  p {
    font-size: 16px;
    color: ${props => props.theme.color.tertiary};
    font-weight: 500;
  }
`;

const CartSlider = props => {
  return (
    <StyledCart opened={props.opened}>
      <p>{props.counter} Items added</p>
    </StyledCart>
  );
};

export default CartSlider;
