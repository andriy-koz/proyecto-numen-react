import styled from 'styled-components';
import cartIcon from '../../images/cart.svg';
import { Container } from './Container.styled';

const CartStyled = styled.img`
  transition: all 300ms;
`;

const CounterDisplay = styled.div`
  position: absolute;
  top: -4px;
  right: -3px;
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const CartBtn = props => {
  return (
    <Container onClick={props.onClick}>
      <CartStyled src={cartIcon} alt='' />
      <CounterDisplay>
        <p>{props.counter}</p>
      </CounterDisplay>
    </Container>
  );
};

export default CartBtn;
