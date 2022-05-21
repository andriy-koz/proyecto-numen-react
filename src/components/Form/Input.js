import { StyledInput } from './Input.styled';
import React from 'react';

const Input = props => {
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
      <p>{props.id} must be valid</p>
    </StyledInput>
  );
};

export default Input;
