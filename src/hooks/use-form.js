import { useReducer } from 'react';

const initialState = {};

const reducerFunction = (state, action) => {
  if (action.type === 'ON_CHANGE') {
    return {
      ...state,
      [state[action.id]]: {
        val: action.val,
        touched: state[action.id]?.touched ?? false,
        valid: state[action.id]?.valid ?? false,
      },
    };
  }
  return state;
};

const useForm = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const onInputChange = (value, id) => {
    dispatch({ type: 'ON_CHANGE', val: value, id: id });
  };

  const onInputBlur = () => {};

  const onFormSubmit = () => {};

  return [state, onInputChange, onInputBlur, onFormSubmit];
};

export default useForm;
