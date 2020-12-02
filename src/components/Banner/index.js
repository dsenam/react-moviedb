import React from 'react';

import { Container } from './styles';
import {Link} from 'react-router-dom'

function Banner() {
  return(
    <>
      <Container>
        <Link to="/favorite">
          <img src="https://veja.abril.com.br/wp-content/uploads/2018/02/blogib_pantera-negra_feat.jpg?quality=70&strip=info&resize=680,453" alt="Pantera Negra" />
        </Link>

        <article>
          <h1>PANTERA NEGRA</h1>
          <p>Clique na imagem e confira mais detalhes</p>
        </article>
      </Container>
    </>
  );
}

export default Banner;