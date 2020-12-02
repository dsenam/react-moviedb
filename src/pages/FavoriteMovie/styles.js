import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: black;
`;

export const Loading = styled.div`
  display: flex; 
  width: 100%;
  height: 100%;
  background-color: black;
  justify-content: center;
  align-items: center;

  svg {
    transform: rotate(45deg);
    color: white;
    font-size: 40px;
  }
`;

