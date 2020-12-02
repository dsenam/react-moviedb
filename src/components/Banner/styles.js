import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  height: 400px;
  text-align: center;
  justify-content: center;
  padding: 20px;

  article {
    h1 {
      font-size: 72px;
      color: white;
    }

    p {
      font-size: 36px;
      color: white;
    }
  }
`;
