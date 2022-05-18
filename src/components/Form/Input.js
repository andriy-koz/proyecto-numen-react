import { StyledInput } from './Input.styled';
import React, { useState } from 'react';

const Input = props => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const valueIsValid = value !== '';

  const onChangeHandler = e => {
    setValue(e.target.value);
    setHasError(false);
  };
  const onBlurHandler = () => {
    setHasError(!valueIsValid);
  };

  props.hasError(hasError);

  return (
    <StyledInput>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {hasError && <p>Invalid</p>}
    </StyledInput>
  );
};

export default Input;
