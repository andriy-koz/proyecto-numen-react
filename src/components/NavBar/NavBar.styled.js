import styled from 'styled-components';

export const StyledNavBar = styled.div`
  position: relative;
  background-color: ${props => props.theme.color.primary};
  max-width: 1280px;
  height: auto;
  margin: auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
  @media (min-width: 768px) {
    align-self: flex-end;
    margin-top: 20px;
  }
`;

export const StyledLogo = styled.img`
  height: 50px;
  @media (min-width: 768px) {
    height: 300px;
    width: 350px;
    order: 2;
  }
`;
