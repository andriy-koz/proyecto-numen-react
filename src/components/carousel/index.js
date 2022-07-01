import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = e => e.preventDefault();

const responsive = {
  320: { items: 1 },
  550: { items: 2 },
  768: { items: 3 },
};

const Gallery = () => {
  const [bodegas, setBodegas] = useState([]);
  useEffect(()=>{
    const getBodegas = ()=>{
      try {
        axios.get("http://localhost:3006/bodegas").then(res=>{
          setBodegas(res.data);
        })
      } catch (error) {
        alert ('error')
      }
    }
    getBodegas();
  }, [])
  const items = bodegas.map((bodega)=> <img key={bodega.id} src={bodega.img} onDragStart={handleDragStart}/>)

  return (<>
    <div className='contenedor-general'>
      <h2 className='carousel-h2' id='bodegas'>Nuestras bodegas</h2>
      <AliceCarousel
        disableDotsControls
        mouseTracking
        items={items}
        paddingLeft={50}
        paddingRight={50}
        responsive={responsive}
        infinite
        autoPlay
        autoPlayInterval={2500}
      />
    </div>
  </>
  );
};

export default Gallery;
