import {
  StyledOverlay,
  StyledHero,
  StyledText,
  ButtonsContainer,
} from './Hero.styled';
import img from '../../images/hero.jpg';
import Button from './Button';

const Hero = () => {
  return (
    <StyledHero img={img}>
      <StyledOverlay />
      <StyledText>
        Selección de vinos de las mejores bodegas de mendoza.
      </StyledText>
      <ButtonsContainer>
        <Button style={2} content='COMPRAR' />
        <Button style={1} content='SABER MAS' />
      </ButtonsContainer>
    </StyledHero>
  );
};

export default Hero;
