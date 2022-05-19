import { StyledInput } from './Input.styled';
import React, { useReducer } from 'react';

const initialState = {
  name: { value: '', valid: true, touched: false },
  lastName: { value: '', valid: true, touched: false },
  email: { value: '', valid: true, touched: false },
};

const inputReducer = (state, action) => {
  const validation = state[action.id].value !== '';

  if (action.type === 'CHANGE') {
    state[action.id] = {
      value: action.value,
      valid: validation,
      touched: state[action.id].touched,
    };
    return state;
  }
  if (action.type === 'BLUR') {
    state[action.id] = {
      value: state[action.id].value,
      valid: validation,
      touched: true,
    };
    return state;
  }
  if (action.type === 'RESET') {
    for (const key in state) {
      state[key].value = '';
      state[key].touched = false;
    }
    return state;
  }
  return inputReducer;
};

const Input = props => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const hasError = !state[props.id].valid && state[props.id].touched;

  console.log(hasError);

  return (
    <StyledInput>
      <button
        type='button'
        onClick={() => dispatch({ type: 'RESET', id: props.id })}>
        Resetear
      </button>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={e => {
          dispatch({ type: 'CHANGE', value: e.target.value, id: props.id });
        }}
        onBlur={() => {
          dispatch({ type: 'BLUR', id: props.id });
        }}
      />
      {hasError && <p>has error</p>}
    </StyledInput>
  );
};

export default Input;
