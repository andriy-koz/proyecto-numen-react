import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImgText, StyledCards, StyledWinesContainer } from '../styles/StyledWines';
import Contador from './Contador/Contador';


const Wines = () => {
  const [vinos, setVinos] = useState([]);
  useEffect(() => {
    const getVinos = ()=> {
    try {
      axios.get("http://localhost:3006/vinos").then(res => {
        setVinos(res.data);
      })
    } catch (error) {
      alert('error')
    }
  }
    getVinos();
  }, [])

  

  

  return (
    <div
      style={{
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#161314',
        paddingTop: '30px',
      }}>
      <h2 id='vinos'>Vinos más vendidos del mes</h2>
      <h4>Top Selling Wines this Month</h4>
      
      <StyledWinesContainer>
        {vinos.map((vino) => (
          <StyledCards key={vino.id}>
          <img alt='' src={vino.img} />
          <ImgText>Prod.:{vino.nombre}</ImgText>
          <ImgText>${vino.precio} </ImgText>
          <Contador />
        </StyledCards>
        ))}
      </StyledWinesContainer>
    </div>
  );
};

export default Wines;
