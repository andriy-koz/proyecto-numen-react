import vino1 from '../images/vino1.jpg';
import vino2 from '../images/vino2.jpg';
import vino3 from '../images/vino3.jpg';
import vino4 from '../images/vino4.jpg';
import { StyledCards, StyledWinesContainer } from '../styles/StyleWines';




const  Wines = () =>{

const winesImg = [
    <img src={vino1} alt="vino1" />,
    <img src={vino2} alt="vino2" />,
    <img src={vino3} alt="vino3" />,
    <img src={vino4} alt="vino4" />,
];

const winesMap = winesImg.map((item)=> <StyledCards>{item}</StyledCards>);

    return(
    <div>
        <h1>VINOS MÁS VENDIDOS DEL MES</h1>
        <h2>Top Selling Wines this Month</h2>
        <StyledWinesContainer>
            {winesMap}
        </StyledWinesContainer>
    </div>
    );
};

export default Wines;