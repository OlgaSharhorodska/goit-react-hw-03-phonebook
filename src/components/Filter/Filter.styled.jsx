import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 15px;
  width: 250px;
  height: 26px;
  margin-bottom: 50px;
  outline: none;

  label {
    font-weight: 500;
    margin-bottom: 5px;
  }
  input {
    font-size: 15px;
    width: 250px;
    height: 26px;
    outline: none;

    &:focus {
      outline: 1px solid rgba(0, 255, 255);
    }
  }
`;
