import React from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: ${props => props.theme.font}, sans-serif;
  font-weight: 500;
  padding: 0 5px;
  border-radius: 8px;
  outline: none;
  border: none;
  transition: all 200ms;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transform: scale(${({ open }) => (open ? 1 : 0.5)});
  @media (min-width: 768px) {
    margin-right: ${({ open }) => (open ? 0 : -168)}px;
  }
`;

const SearchInput = props => {
  return <StyledInput value={!props.opened ? '' : null} open={props.opened} />;
};

export default SearchInput;
