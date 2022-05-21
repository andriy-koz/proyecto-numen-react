import { StyledInput } from './Input.styled';
import React from 'react';

const Input = props => {
  console.log(props.val);
  return (
    <StyledInput>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        name={props.id}
        type={props.type}
        onChange={e => {
          props.onChange(e.target.value, props.id);
        }}
        // onBlur={() => {}}
        value={props.val}
      />
    </StyledInput>
  );
};

export default Input;
