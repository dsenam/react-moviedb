import React from 'react';

import { Container } from './styles';

function Content({favoriteMovie}) {
  return (
    <>
      <Container>
          <img src={`https://image.tmdb.org/t/p/w500/${favoriteMovie.poster_path}`} alt={favoriteMovie.title} />
        
        <article>
          <h1>{favoriteMovie.title}</h1>
          <p>Sinopse:</p>
          <p>{favoriteMovie.overview}</p>
          <p>Avaliação:</p>
          <span>{favoriteMovie.vote_average}</span>
        </article>  
      
      </Container>
    </>
  );
}

export default Content;