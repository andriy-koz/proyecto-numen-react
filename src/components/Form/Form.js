import {
  InputLayoutDiv,
  LayoutDiv,
  StyledForm,
  FormContainer,
} from './Form.styled';
import Input from './Input';
import useForm from '../../hooks/use-form';

const Form = () => {
  const [state, onInputChange, onInputBlur, onFormSubmit, validForm] = useForm([
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
        <form
          onSubmit={e => {
            onFormSubmit(e);
          }}>
          <InputLayoutDiv>
            <Input
              label='Nombre'
              id='name'
              type='text'
              val={state.name.val}
              onChange={onInputChange}
              onBlur={onInputBlur}
              hasError={state.name.hasError}
            />
            <Input
              label='Apellido'
              id='lastName'
              type='text'
              val={state.lastName.val}
              onChange={onInputChange}
              onBlur={onInputBlur}
              hasError={state.lastName.hasError}
            />
          </InputLayoutDiv>
          <Input
            label='Email'
            id='email'
            type='email'
            val={state.email.val}
            onChange={onInputChange}
            onBlur={onInputBlur}
            hasError={state.email.hasError}
          />
          <button disabled={!validForm}>ENVIAR</button>
        </form>
      </FormContainer>
    </StyledForm>
  );
};

export default Form;
