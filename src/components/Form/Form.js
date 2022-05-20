import {
  InputLayoutDiv,
  LayoutDiv,
  StyledForm,
  FormContainer,
} from './Form.styled';
import Input from './Input';
import useForm from '../../hooks/use-form';

const Form = () => {
  const [state, onInputChange, onInputBlur, onFormSubmit] = useForm([
    'name',
    'lastName',
    'email',
  ]);

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
              label='Nombre'
              id='name'
              type='text'
              value={state.name.val}
              onChange={onInputChange}
            />
            <Input
              label='Apellido'
              id='lastName'
              type='text'
              value={state.lastName.val}
              onChange={onInputChange}
            />
          </InputLayoutDiv>
          <Input
            label='Email'
            id='email'
            type='email'
            value={state.email.val}
            onChange={onInputChange}
          />
          <button>ENVIAR</button>
        </form>
      </FormContainer>
    </StyledForm>
  );
};

export default Form;
