import styled from 'styled-components';
import { StyledSlider } from './StyledSlider';

const myList = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'];

const StyledMenu = styled(StyledSlider)`
  ul {
    color: ${props => props.theme.color.tertiary};
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
