import ActionsTypes from "./actionsTypes"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.SET_MOVIE_LIST:
      return  [...state, action.payload]
    default:
      return state
  }
}

export default reducer