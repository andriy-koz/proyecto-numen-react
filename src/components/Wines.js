import React from 'react';
import vino1 from '../images/vino1.jpg';
import vino2 from '../images/vino2.jpg';
import vino3 from '../images/vino3.jpg';
import vino4 from '../images/vino4.jpg';
import { StyledCards, StyledWinesContainer } from '../styles/StyledWines';

const Wines = () => {
  const winesImg = [
    <img src={vino1} alt='vino1' title='vino1' />,
    <img src={vino2} alt='vino2' title='vino2' />,
    <img src={vino3} alt='vino3' title='vino3' />,
    <img src={vino4} alt='vino4' title='vino4' />,
  ];
  //EN DONDE DICE TITLE (en las img) PONER EL NOMBRE DE LOS VINOS//
  const winesMap = winesImg.map(item => <StyledCards>{item}</StyledCards>);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h2>VINOS MÁS VENDIDOS DEL MES</h2>
      <h3>Top Selling Wines this Month</h3>
      <StyledWinesContainer>{winesMap}</StyledWinesContainer>
    </div>
  );
};

export default Wines;
