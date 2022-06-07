import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import alpamanta from '../images/alpamanta.jpg';
import atamisque from '../images/atamisque.jpg';
import bianchi from '../images/bianchi.jpg';
import catenaZapata from '../images/catenaZapata.jpg';
import escorihuelaGascon from '../images/escorihuelaGascon.jpg';
import estanciaMendoza from '../images/estanciaMendoza.jpg';
import salentein from '../images/salentein.jpg';
import septimaVista from '../images/septimaVista.jpg';
import suter from '../images/suter.jpg';
import tierrasAltas from '../images/tierrasAltas.jpg';
import trivento from '../images/trivento.jpg';
import zuccardi from '../images/zuccardi.jpg';

const handleDragStart = e => e.preventDefault();

const items = [
  <img alt='' className='carousel-img' src={alpamanta} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={atamisque} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={bianchi} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={catenaZapata} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={escorihuelaGascon} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={estanciaMendoza} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={salentein} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={septimaVista} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={suter} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={tierrasAltas} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={trivento} onDragStart={handleDragStart} />,
  <img alt='' className='carousel-img' src={zuccardi} onDragStart={handleDragStart} />,
];

const responsive = {
  320: { items: 1 },
  550: { items: 2 },
  768: { items: 3 },
};

const Gallery = () => {
  return (<>
    <AliceCarousel
      disableButtonsControls
      mouseTracking
      items={items}
      paddingLeft={50}
      paddingRight={50}
      responsive={responsive}
      infinite
      autoPlay
      autoPlayInterval={2500}
    />
    </>
  );
};

export default Gallery;
