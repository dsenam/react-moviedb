import React from 'react';

import { Container } from './styles';
import {Link} from 'react-router-dom'

function Banner() {
  return(
    <>
      <Container>
        <Link to="/favorite">
        <article>
          <h1>PANTERA NEGRA</h1>
          <p>Clique!</p>
        </article>
        </Link>

        
        
      </Container>
    </>
  );
}

export default Banner;