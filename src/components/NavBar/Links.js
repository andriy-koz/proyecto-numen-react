import styled from 'styled-components';

const myList = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'];

const StyledLinks = styled.ul`
  display: none;
  color: #a9d6e5;
  li:hover {
    cursor: pointer;
    color: white;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const Links = () => {
  return (
    <StyledLinks>
      {myList.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </StyledLinks>
  );
};

export default Links;
