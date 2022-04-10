import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  padding: 0 5px;
  border-radius: 8px;
  outline: none;
  border: none;
  transition: all 200ms;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transform: scale(${({ open }) => (open ? 1 : 0.5)});
`;

const SearchInput = props => {
  return <StyledInput value={!props.opened ? '' : null} open={props.opened} />;
};

export default SearchInput;
