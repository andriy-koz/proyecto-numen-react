import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 10px;
  background-image: radial-gradient(circle at 14.64% -11.24%, #802622 0, #7f2122 25%, #7e1b22 50%, #7d1522 75%, #7c0d22 100%);
  ;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 5px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 25px;
  font-size: 17px;
  text-decoration: none;

  &:hover {
    color: #bb8bce;
    transition: 100ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 25px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  box-shadow: 0px 1px 0px 0px white;

  @media (max-width: 768px) {
    box-shadow: 0px 1px 0px 0px white;
  }
`;
