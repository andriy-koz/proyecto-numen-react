import styled from 'styled-components';
import { StyledSlider } from './StyledSlider';
import { myList } from '../Links';

const StyledMenu = styled(StyledSlider)`
  ul {
    color: ${props => props.theme.color.tertiary};
    display: grid;
    gap: 20px;
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
