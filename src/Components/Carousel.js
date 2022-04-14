import { useState } from 'react';
import { StyledCarousel, StyledCard } from './Styles/Carousel.styled';
import Arrow from './Arrow';



const Carousel = () => {

    const [index, setIndex] = useState(0);

    const imgArray = [
        {id: 1, img: 'img1'},
        {id: 2, img: 'img2'},
        {id: 3, img: 'img3'},
        {id: 4, img: 'img4'},
        {id: 5, img: 'img5'},
    ];

    const previous = () => {
        if (index > 0) setIndex(index - 1);
        if (index === 0) setIndex(4);
    };
    
    
    const next = () => {
        if (index < imgArray.length -1) setIndex(index + 1);
        if (index === imgArray.length - 1) setIndex(0);
    }

const mapeoImg = imgArray.map((item =><StyledCard key={item.id}>{item.img}</StyledCard>));

    return(
        <StyledCarousel>
            <Arrow left onClick={previous} />
                {mapeoImg}
            <Arrow onClick={next} />
        </StyledCarousel>
    );
};

export default Carousel;   