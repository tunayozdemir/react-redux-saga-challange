import axios from "axios";
import {takeLatest, call, put } from 'redux-saga/effects'
import Actions from './action'
import ActionsTypes from "./actionsTypes";

const fetchMovies = async () => {
  try {
    const { data } = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=2319ff36&s=spider&page=1')
    return data;
  } catch (err) {
    console.log(err)
  }
}

function* handleGetMovies() {
  try{
    const response = yield call(fetchMovies);
    yield put(Actions.setMovieList(response))
  }catch(err){
    console.log(err)
  }
}

export default function* rootSaga(){
  yield takeLatest(ActionsTypes.GET_MOVIE_LIST, handleGetMovies)
}

