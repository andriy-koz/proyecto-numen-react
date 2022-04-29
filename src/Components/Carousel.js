import React from 'react';
import AliceCarousel, { AutoplayDirection } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="path-to-img" onDragStart={handleDragStart} />,
    <img src="path-to-img" onDragStart={handleDragStart} />,
    <img src="path-to-img" onDragStart={handleDragStart} />,
    <img src="path-to-img" onDragStart={handleDragStart} />,
    <img src="path-to-img" onDragStart={handleDragStart} />,
    <img src="path-to-img" onDragStart={handleDragStart} />,
];

const responsive = {
    0: {items: 1},
    550: {items: 2},
    768: {items: 3},
};

const Gallery = () => {
    return (
        <AliceCarousel 
        mouseTracking
        items={items}
        paddingLeft={50}
        paddingRight={50}
        responsive={responsive}
        infinite
        autoPlay
        autoPlayInterval={2000}
        />
    );
}

export default Gallery;   