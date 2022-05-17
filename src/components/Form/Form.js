import React from 'react';
import { StyledForm } from './Form.styled';
import Input from './Input';

const Form = () => {
  return (
    <StyledForm>
      <h3>Unite a nuestra Lista VIP</h3>
      <p>Recibe novedades, ofertas e invitaciones exclusivas!</p>
      <form>
        <Input label='Nombre' id='name' type='text' />
        <Input label='Apellido' id='lastName' type='text' />
        <Input label='Email' id='email' type='email' />
        <button>ENVIAR</button>
      </form>
    </StyledForm>
  );
};

export default Form;
