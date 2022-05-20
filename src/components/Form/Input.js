import { StyledInput } from './Input.styled';
import React from 'react';

const Input = props => {
  return (
    <StyledInput>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={e => {
          props.onChange(e.target.value, props.id);
        }}
        onBlur={() => {}}
        value={props.value}
      />
    </StyledInput>
  );
};

export default Input;
