import {
  InputLayoutDiv,
  LayoutDiv,
  StyledForm,
  FormContainer,
} from './Form.styled';
import Input from './Input';
import useForm from '../../hooks/use-form';

const Form = () => {
  const [state, onInputChange, onInputBlur, onFormSubmit] = useForm();

  console.log(state);

  return (
    <StyledForm>
      <FormContainer>
        <LayoutDiv>
          <h3>Unite a nuestra Lista VIP</h3>
          <p>Recibe novedades, ofertas e invitaciones exclusivas!</p>
        </LayoutDiv>
        <form>
          <InputLayoutDiv>
            <Input
              onChange={onInputChange}
              label='Nombre'
              id='name'
              type='text'
            />
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
