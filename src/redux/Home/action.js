import ActionsTypes from "./actionsTypes"

const setMovieList = (items) => ({
  type: ActionsTypes.SET_MOVIE_LIST,
  payload: items
})

const getMovieList = (items) => ({
  type: ActionsTypes.GET_MOVIE_LIST,
  payload: items
})

const movieActions = {
  setMovieList,
  getMovieList,
}

export default movieActions