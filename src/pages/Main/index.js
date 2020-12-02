import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Container, HeaderContainer, ListMovies, Actions } from './styles';
import { MdFastForward, MdFastRewind } from "react-icons/md";


function Main() {
  const apiKey = '7521b41284f1ad24823061811cf4b6e8'
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    async function loadData() {
      setLoading(true)
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`)

      setMovies([...movies, ...response.data.results])
      setTotalPages(response.data.total_pages)
      setLoading(false)
    }

    loadData()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])





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

            <ListMovies>
              <Actions>
                <h1>Filmes Populares</h1>
                <div>
                  <button>
                  <MdFastRewind />
                  </button>

                  <button>
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
                    </div> 
                  
                </li>
                ))}
                
              </ul>
            </ListMovies>
        </Container>
      </>
  );
}

export default Main;