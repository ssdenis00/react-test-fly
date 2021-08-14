import { LOGIN, LOGOUT, SHOW_VALIDATE_ERR, HIDE_VALIDATE_ERR } from './types';

const localStorageState = JSON.parse(localStorage.getItem('authorization')) || false;

const initialState = {
  login: localStorageState.login,
  email: false,
  pass: false,
}


const loggedInReduser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('authorization', JSON.stringify({ login: true }));
      return { ...state, login: true }
    case LOGOUT:
      localStorage.setItem('authorization', JSON.stringify({ login: false }));
      return { ...state, login: false }
    case SHOW_VALIDATE_ERR:
      return { ...state, [action.place]: true }
    case HIDE_VALIDATE_ERR:
      return { ...state, [action.place]: false }
    default: return state;
  }
}



export default loggedInReduser;