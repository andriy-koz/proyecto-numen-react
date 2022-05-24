import styled from 'styled-components';

export const StyledNavBar = styled.div`
  position: relative;
  background-color: ${props => props.theme.color.primary};
  max-width: 1280px;
  height: 50px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
`;
