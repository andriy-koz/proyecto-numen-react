import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImgText, StyledCards, StyledWinesContainer } from '../styles/StyledWines';
import Contador from './Contador/Contador';


const Wines = () => {

  useEffect(()=>{
  getVinos();
},[])

const [vinos,setVinos]= useState([]);

const getVinos = async()=>{
  try {
    const res = axios.get("http://localhost:3006/vinos").then(res=>{
      setVinos(res.data);
    })
  } catch (error) {
    alert('error')
  }
}

  return (
    <div
      style={{
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '47px',
        alignItems: 'center',
        backgroundColor: '#161314',
        paddingTop: '30px',
      }}>
      <h2>Vinos más vendidos del mes</h2>
      <h4>Top Selling Wines this Month</h4>
      <div>
        <StyledWinesContainer>
          {vinos.map((vino)=><StyledCards key={vino.id}>
          <img src={vino.img}/>
          <ImgText>Prod.:{vino.nombre}</ImgText>
          <ImgText>${vino.precio} </ImgText>
          <Contador/>
        </StyledCards>)}
        </StyledWinesContainer>
      </div>
    </div>
  );
};

export default Wines;
