import styled from 'styled-components';

const myList = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'];

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  top: 52px;
  background-color: #013a63;
  padding: 25px;
  width: 180px;
  border-radius: 8px;
  transition: all 300ms;
  transform: translateX(${({ opened }) => (opened ? 0 : 100)}%);
  opacity: ${({ opened }) => (opened ? 1 : 0)};
  pointer-events: ${({ opened }) => (opened ? 'auto' : 'none')};
  ul {
    color: #a9d6e5;
    display: grid;
    gap: 5px;
  }
`;

const MenuSlider = props => {
  return (
    <StyledMenu opened={props.opened}>
      <ul>
        {myList.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default MenuSlider;
