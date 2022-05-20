import { useReducer, useCallback } from 'react';

const reducerFunction = (state, action) => {
  if (action.type === 'ON_CHANGE') {
    state[action.id].val = action.val;
    return state;
  }
  if (action.type === 'ON_BLUR') {
    state[action.id].touched = true;
    return state;
  }
  return state;
};

const useForm = inputIds => {
  const initialState = useCallback(ids => {
    const myState = {};
    ids.forEach(id => {
      myState[id] = {
        val: '',
        touched: false,
        valid: false,
        hasError: false,
      };
    });
    return myState;
  }, []);

  const [state, dispatch] = useReducer(reducerFunction, initialState(inputIds));

  const onInputChange = (value, id) => {
    dispatch({ type: 'ON_CHANGE', val: value, id: id });
  };

  const onInputBlur = id => {
    dispatch({ type: 'ON_BLUR', id: id });
  };

  const onFormSubmit = () => {};

  return [state, onInputChange, onInputBlur, onFormSubmit];
};

export default useForm;
