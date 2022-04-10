import styled from 'styled-components';
import closeIcon from '../../images/close.svg';
import userIcon from '../../images/user.svg';
import { Container } from './Container.styled';

const OpenMenu = styled.img`
  margin-right: -24px;
  transition: all 300ms;
  opacity: ${({ opened }) => (opened ? 0 : 1)};
  transform: rotate(${({ opened }) => (opened ? -90 : 0)}deg);
`;
const CloseMenu = styled.img`
  transition: all 300ms;
  opacity: ${({ opened }) => (opened ? 1 : 0)};
  transform: rotate(${({ opened }) => (opened ? -90 : 0)}deg);
`;

const SearchBtn = props => {
  return (
    <Container onClick={props.onClick}>
      <OpenMenu src={userIcon} alt='' opened={props.opened} />
      <CloseMenu src={closeIcon} alt='' opened={props.opened} />
    </Container>
  );
};

export default SearchBtn;
