import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 80%;
  display: flex;
  border-bottom: 1px solid #dcdcdc;

  img {
    height: 100%;
  }

  article {
    padding: 20px;

    h1 {
      font-size: 36px;
      margin-bottom: 10px;
    }

    p {
      font-size: 20px;
      padding: 10px;
      margin: 10px;
    }

    span {
      font-weight: bold;
      font-size: 36px;
      padding: 10px;
      margin: 10px;

    }
  }
`;
