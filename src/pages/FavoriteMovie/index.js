import React, {useState ,useEffect } from 'react';
import api from '../../services/api'
import { Container, Loading } from './styles';
import {FaSpinner} from 'react-icons/fa'

import ListCast from '../../components/ListCast'
import Content from '../../components/Content'


function FavoriteMovie() {
  const apiKey = '7521b41284f1ad24823061811cf4b6e8'
  const [cast, setCast] = useState([])
  const [favoriteMovie, setFavoriteMovie] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    try {
      setLoading(true)
      async function loadData() {
        //Requisição detalhes do filme
        const response = await api.get(`284054?api_key=${apiKey}&language=pt-br`)
        setFavoriteMovie(response.data)
        
  
        //Requisição cast
        const {data} = await api.get(`284054/credits?api_key=${apiKey}&language=pt-BR`)
        const objActingArray = data.cast.filter(item => item.known_for_department === 'Acting' ? item.known_for_department : null)
        setCast(objActingArray)

      setLoading(false)
      }
  
      loadData()
    } catch (error) {
      console.log(error)
    }
  }, [])
  
  if(loading === true) {
    return (
      <Loading>
        <FaSpinner />
      </Loading> 
    )
  }
      
  return (
    <>
    <Container> 
      <Content favoriteMovie={favoriteMovie}/>
      <ListCast cast={cast}/>
    </Container>
    </>
  );
}

export default FavoriteMovie;