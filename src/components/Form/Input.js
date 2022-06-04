import { StyledInput } from './Input.styled';
import React from 'react';

const Input = props => {
  let errorMsg =
    props.id === 'name'
      ? 'Ingrese un nombre válido.'
      : props.id === 'lastName'
      ? 'Ingrese un apellido válido.'
      : props.id === 'email'
      ? 'Ingrese un e-mail válido.'
      : null;

  return (
    <StyledInput hasError={props.hasError}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        name={props.id}
        type={props.type}
        onChange={e => {
          props.onChange(e.target.value, props.id);
        }}
        onBlur={() => props.onBlur(props.id)}
        value={props.val}
      />
      <p>{errorMsg}</p>
    </StyledInput>
  );
};

export default Input;
