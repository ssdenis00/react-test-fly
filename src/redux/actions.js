import { LOGIN, LOGOUT, SHOW_VALIDATE_ERR, HIDE_VALIDATE_ERR, SET_LIKE, REMOVE_LIKE, REQUEST_FLIGHTS/* , FETCH_FLIGHTS */ } from './types'

export function logIn() {
  return {
    type: LOGIN
  }
}

export function logOut() {
  return {
    type: LOGOUT
  }
}

export function showValidateErr(place) {
  return {
    type: SHOW_VALIDATE_ERR,
    place: place.input,
    [place.input]: place.state,
  }
}

export function hideValidateErr(place) {
  return {
    type: HIDE_VALIDATE_ERR,
    place: place.input,
    [place.input]: place.state,
  }
}

export function fetchFlights() {
  /* return async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const json = await res.json();
    dispatch({ type: FETCH_FLIGHTS, payload: json })
  } */
  return {
    type: REQUEST_FLIGHTS
  }
}

export function setLike(id) {
  return {
    type: SET_LIKE,
    payload: id
  }
}

export function removeLike(id) {
  return {
    type: REMOVE_LIKE,
    payload: id
  }
}