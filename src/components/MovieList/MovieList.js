import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ActionsTypes from '../../redux/Home/action'

const MovieList = () => {
  const movies = useSelector((state) => [state.Home])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ActionsTypes.getMovieList())

  }, [dispatch])

  return (
    <ul>
      {
        movies[0].map((items) => (
          items.Search != null ?
            items.Search.map((response, index) => {
              return (
                <li key={index}>
                  <span>{response.Title}</span>
                  <img alt={response.Title} src={response.Poster} />
                  <span>{response.Year}</span>
                </li>
              )
            }
            ) : <span>Liste Çeliklemedi</span>
        ))
      }
    </ul>
  )
}
export default MovieList;