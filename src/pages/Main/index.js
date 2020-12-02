import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Container, ListMovies, Actions } from './styles';
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
      
      setMovies(response.data.results)
      setTotalPages(response.data.total_pages)
      setLoading(false)
      
    }

    loadData()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])


function prevPage() {
  if(page===1) return;

  setPage(page - 1)
}

function nextPage() {
  if(page === totalPages) return;
    setPage(page + 1)
}

if(loading === true) {
  return (
    <h1>Carregando...</h1>
  )
}


  return (
      <>
        <Container>
            

            <ListMovies>
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
            </ListMovies>
        </Container>
      </>
  );
}

export default Main;