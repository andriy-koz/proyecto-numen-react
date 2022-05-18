import styled from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;

  input {
    color: #fff;
    padding: 12px 14px;
    background-color: #2b2628;
    border: 1px solid #fff;
    border-radius: 4px;
    transition: all 0.5s;
    width: 100%;
  }

  input:focus {
    outline: none;
    background-color: #161314;
  }
  input:hover {
    cursor: pointer;
  }
`;
