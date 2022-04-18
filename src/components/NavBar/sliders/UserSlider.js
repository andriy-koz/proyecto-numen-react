import styled from 'styled-components';
import userIcon from '../../../images/user.svg';

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  top: 52px;
  background-color: ${props => props.theme.color.secondary};
  padding: 25px;
  width: 180px;
  border-radius: 8px;
  transition: all 300ms;
  transform: translateX(${({ opened }) => (opened ? 0 : 100)}%);
  opacity: ${({ opened }) => (opened ? 1 : 0)};
  pointer-events: ${({ opened }) => (opened ? 'auto' : 'none')};
  img {
    width: 48px;
    height: 48px;
  }
  p {
    font-size: 16px;
    color: ${props => props.theme.color.tertiary};
    font-weight: 500;
  }
`;

const UserSlider = props => {
  return (
    <StyledUser opened={props.opened}>
      <img src={userIcon} alt='' />
      <p>PROFILE</p>
    </StyledUser>
  );
};

export default UserSlider;
