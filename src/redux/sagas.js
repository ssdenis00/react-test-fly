import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_FLIGHTS, REQUEST_FLIGHTS } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_FLIGHTS, sagaWorker)
}

function* sagaWorker() {
  const payload = yield call(fetchFlights);
  yield put({ type: FETCH_FLIGHTS, payload })
}

//метод для загрузки с данных с сервера
async function fetchFlights() {
  const res = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/RU/RUB/en-RU/?query=Moscow", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "9e818ad923msha494dffe254b227p1bb0e1jsn3249dda9dbe5",
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    }
  });
  /* fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'); */
  return await res.json();
}