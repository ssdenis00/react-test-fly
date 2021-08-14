import { combineReducers } from "redux";
import loggedInReduser from "./loggedInReducer";
import { imagesReduser } from "./imagesReducer";
import flightReduser from "./flightsReducer";

const rootReducer = combineReducers(
  {
    login: loggedInReduser,
    images: imagesReduser,
    flights: flightReduser,
  }
)

export default rootReducer;