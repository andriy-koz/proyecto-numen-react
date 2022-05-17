import { StyledInput } from './Input.styled';

const Input = props => {
  return (
    <StyledInput>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} />
    </StyledInput>
  );
};

export default Input;
