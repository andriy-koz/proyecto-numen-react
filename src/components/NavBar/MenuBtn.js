import styled from 'styled-components';
import closeIcon from '../../images/close.svg';
import openIcon from '../../images/menu.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

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

const MenuBtn = props => {
  return (
    <Container onClick={props.onClick}>
      <OpenMenu src={openIcon} alt='' opened={props.opened} />
      <CloseMenu src={closeIcon} alt='' opened={props.opened} />
    </Container>
  );
};

export default MenuBtn;
