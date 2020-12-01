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

export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;

    div {
       position: relative;

      img {
        width: 100%;
        height: 500px;
      }

      h1 {
        position: absolute;
        font-weight: bold;
        font-size: 32px;
        color: white;
        left: 50px;
        top: 320px;
      }

      p {
        position: absolute;
        font-size: 20px;
        color: white;
        left: 50px;
        top: 375px;
        margin-right: 20px;
      }

    }
    
`;

export const ListMovies = styled.div`
  padding: 40px;
  

  h1 {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

  li {
      list-style: none;
      padding: 10px;

      button {
        :hover {
          opacity: 0.8;
        }
      }
    }

  }

  img {
    height: 400px;
    width: 280px;
    border-radius: 5px;
  }
`;