import React from 'react';

import { Container } from './styles';

function ListCast({cast}) {
  return (
    <>
      <Container>
        <h1>Elenco</h1>
       <ul>
       {cast.map(athor => (
              <li>
                  <img src={`https://image.tmdb.org/t/p/w500/${athor.profile_path}`} alt={athor.name} />
                <article>
                  <p>{athor.name}</p>
                  <span>{athor.character}</span>
                </article>
              </li>
            ))}
      </ul> 
      
      </Container>
    </>
  );
}

export default ListCast;