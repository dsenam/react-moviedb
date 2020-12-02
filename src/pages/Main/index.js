import React, {useEffect, useState} from 'react';
import api from '../../services/api'
import {Loading} from './styles'

import {FaSpinner} from 'react-icons/fa'

import Banner from '../../components/Banner'
import ListMovies from '../../components/ListMovies'

function Main() {
  const apiKey = '7521b41284f1ad24823061811cf4b6e8'
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)


 
  useEffect(()=> {

    try {
      async function loadData() {
        setLoading(true)
        const response = await api.get(`popular?api_key=${apiKey}&language=pt-BR&page=${page}`)
        
        setMovies(response.data.results)
        setTotalPages(response.data.total_pages)
        setLoading(false)
        
      }
      loadData()
    } catch (error) {
      console.log(error)
    }
    

    
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
    <Loading>
      <FaSpinner />
    </Loading> 
  )
}

  return (
      <>
        <Banner />
        <ListMovies movies={movies} prevPage={prevPage} nextPage={nextPage}/>
      </>
  );
}

export default Main;