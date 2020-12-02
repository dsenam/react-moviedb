import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: black;
  height: 650px;
  text-align: center;
  justify-content: center;

  img {
    height: 80%;

    :hover {
      opacity: 0.8;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    h1 {
      font-size: 72px;
      color: white;
    }
  }
`;
