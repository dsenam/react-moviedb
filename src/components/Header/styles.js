import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 40px;

  svg {
      color: white;
      font-size: 36px;
  }

  button {
      background-color: transparent;
      color: white;
  }
`;
