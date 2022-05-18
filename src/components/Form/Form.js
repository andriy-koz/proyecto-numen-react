import {
  InputLayoutDiv,
  LayoutDiv,
  StyledForm,
  FormContainer,
} from './Form.styled';
import Input from './Input';

const Form = () => {
  return (
    <StyledForm>
      <FormContainer>
        <LayoutDiv>
          <h3>Unite a nuestra Lista VIP</h3>
          <p>Recibe novedades, ofertas e invitaciones exclusivas!</p>
        </LayoutDiv>
        <form>
          <InputLayoutDiv>
            <Input label='Nombre' id='name' type='text' />
            <Input label='Apellido' id='lastName' type='text' />
          </InputLayoutDiv>
          <Input label='Email' id='email' type='email' />
          <button>ENVIAR</button>
        </form>
      </FormContainer>
    </StyledForm>
  );
};

export default Form;
