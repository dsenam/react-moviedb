import React from 'react';

import { Container, Actions } from './styles';
import { MdFastForward, MdFastRewind } from "react-icons/md";

function ListMovies({movies, prevPage, nextPage}) {
  return (
    <>
      <Container>
              <Actions>
                <h1>Filmes Populares</h1>
                <div>
                  <button onClick={prevPage}>
                  <MdFastRewind />
                  </button>

                  <button onClick={nextPage}>
                  <MdFastForward />
                  </button>
                </div>
               
              </Actions>
              <ul>
                {movies.map(movie => (
                  <li key={movie.id}>
                    
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                    <div>
                    <p>{movie.title}</p>
                    <span>{movie.release_date}</span>
                    <span>{movie.id}</span>
                    </div> 
                  
                </li>
                ))}
                
              </ul>
      </Container>
    </>
  )
  ;
}

export default ListMovies;