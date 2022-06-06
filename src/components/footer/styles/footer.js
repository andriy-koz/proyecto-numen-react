import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 10px;
  background-image: radial-gradient(circle at 20.12% -14.09%, #613831 0, #5f312e 10%, #5c292b 20%, #592029 30%, #551627 40%, #500825 50%, #4a0024 60%, #440024 70%, #3d0025 80%, #370027 90%, #30002a 100%);
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
