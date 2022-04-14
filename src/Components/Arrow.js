import arrLeft from './images/arrowLeft.svg';
import arrRight from './images/arrowRight.svg';
import { StyledArrow } from './Styles/Arrow.styled';

const Arrow = props => {
    return (
        <StyledArrow onClick={props.onClick}>
        <img src={props.left ? arrLeft : arrRight} alt='arrow' />
        </StyledArrow>
    );
};

export default Arrow;