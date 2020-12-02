import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px;

  

  ul {
    display: flex;
    flex-wrap: wrap;

    li {

      img {
        height: 350px;
        width: 300px;
        border-radius: 8px;
      }

      list-style: none;
      padding: 10px;
      

      div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 300px;
        background-color: white;

        p {
          font-weight: bold;
          margin-bottom: 5px;
        }

        span {
          color: #dcdcdc;
        }
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 18px;

  h1 {
    margin: 20px;
  }

  button {
    margin-top: 40px;
    padding: 10px;
    margin-left: 20px;
    background-color: transparent;
    height: 30px;

    svg {
      font-size: 30px;
    }
  }
`;
