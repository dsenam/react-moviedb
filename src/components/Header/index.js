import React from 'react';

import { Container } from './styles';
import { BiCameraMovie } from "react-icons/bi";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
      <Container>
                <Link to="/">
                  <BiCameraMovie />
                </Link>
              <button>Entrar</button>
        </Container>
    </>
  );
}

export default Header;