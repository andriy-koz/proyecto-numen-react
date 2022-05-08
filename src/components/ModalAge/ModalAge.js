import {
  StyledBackdrop,
  StyledButton,
  StyledLogo,
  StyledMessage,
  StyledModalAge,
} from './ModalAge.styled';
import logo from '../../images/numen.png';

const ModalAge = () => {
  return (
    <>
      <StyledBackdrop></StyledBackdrop>
      <StyledModalAge>
        <StyledLogo src={logo} />
        <StyledMessage>Debes ser mayor de 18 para continuar</StyledMessage>
        <StyledButton>NO TENGO 18 AUN</StyledButton>
        <StyledButton>SOY MAYOR DE 18, VAMOS</StyledButton>
      </StyledModalAge>
    </>
  );
};

export default ModalAge;
