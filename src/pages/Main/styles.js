import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 40px;

  h1 {
      color: white;
  }

  button {
      background-color: transparent;
      color: white;
  }

  form {
    input {
      margin-bottom: 30px;
      margin-top: 20px;
      width: 300px;
      height: 30px;
      border-radius: 7px;
      
      ::placeholder {
          color: #DCDCDC;
          padding: 10px;
    }
  }
}
`;

export const ListMovies = styled.div`
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

    svg {
      font-size: 30px;
    }
  }

  

  ,
`;
