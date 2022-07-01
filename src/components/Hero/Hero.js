import React from 'react'
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
        {/* No es bueno añadir props con el mismo nombre que default props */}
        <Button style={1} content='COMPRAR' />
        <Button style={2} content='SABER MAS' />
      </ButtonsContainer>
    </StyledHero>
  );
};

export default Hero;
