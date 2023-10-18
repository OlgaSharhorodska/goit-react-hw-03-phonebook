import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border: 1px solid black;
  width: 400px;
  padding: 20px 15px;
  border-radius: 8px;

  label {
    font-weight: 500;
    margin-bottom: 5px;
  }
  input {
    font-size: 15px;
    width: 250px;
    height: 26px;
    margin-bottom: 30px;
    outline: none;

    &:focus {
      outline: 1px solid rgba(0, 255, 255);
    }
  }

  button {
    width: max-content;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), 1px 1px 3px rgba(0, 0, 0, 0.2);

    &:hover {
      background: white;
      color: red;

      &:active {
        background: white;
        color: orange;
      }
    }
  }
`;
