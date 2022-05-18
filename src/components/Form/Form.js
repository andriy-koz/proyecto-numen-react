import React from 'react';
import {
  InputLayoutDiv,
  LayoutDiv,
  StyledForm,
  FormContainer,
} from './Form.styled';
import Input from './Input';

const Form = () => {
  let nameHasError = true;
  let lastNameHasError = true;
  let emailHasError = true;

  const nameHasErrorHandler = hasError => {
    nameHasError = hasError;
  };
  const lastNameHasErrorHandler = hasError => {
    lastNameHasError = hasError;
  };
  const emailHasErrorHandler = hasError => {
    emailHasError = hasError;
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!nameHasError && !lastNameHasError && !emailHasError) {
      console.log('Submitted');
    } else return;
  };

  return (
    <StyledForm>
      <FormContainer>
        <LayoutDiv>
          <h3>Unite a nuestra Lista VIP</h3>
          <p>Recibe novedades, ofertas e invitaciones exclusivas!</p>
        </LayoutDiv>
        <form onSubmit={submitHandler}>
          <InputLayoutDiv>
            <Input
              label='Nombre'
              id='name'
              type='text'
              hasError={nameHasErrorHandler}
            />
            <Input
              label='Apellido'
              id='lastName'
              type='text'
              hasError={lastNameHasErrorHandler}
            />
          </InputLayoutDiv>
          <Input
            label='Email'
            id='email'
            type='email'
            hasError={emailHasErrorHandler}
          />
          <button>ENVIAR</button>
        </form>
      </FormContainer>
    </StyledForm>
  );
};

export default Form;
