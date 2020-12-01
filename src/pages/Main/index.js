import React from 'react';

import { Container, HeaderContainer, ArticleContainer, ListMovies } from './styles';

function Main() {
  return (
      <>
        <Container>
            <HeaderContainer>
                <h1>React Movie</h1>
                
              <form>
                <input type="text" placeholder="Digite o nome do filme" />
              </form>

              <button>Entrar</button>
            </HeaderContainer>
            <ArticleContainer>
                <div>
                    <img src="http://image.tmdb.org/t/p/w780/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg" alt="Teste">

                </img>
                    <h1>Chick Fight</h1>

                    <p>When Anna Wyncomb is introduced to an an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.</p>
                </div>
            </ArticleContainer>

            <ListMovies>
              <h1>Filmes</h1>
              <ul>
                <li>
                  <button>
                    <img src="http://image.tmdb.org/t/p/w780/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg" alt="Teste"/>
                  </button>
                </li>
              </ul>
            </ListMovies>
        </Container>
      </>
  );
}

export default Main;