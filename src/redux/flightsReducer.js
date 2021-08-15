import { FETCH_FLIGHTS, SET_LIKE, REMOVE_LIKE } from './types';

const initialState = {
  flights: [
    {
      id: '1',
      placeFrom: 'Moscow (SVO)',
      placeIn: 'New York City (JFK)',
      date: '28 June, 2020 - 14:50',
      company: 'Aeroflot',
      price: '23 924 ₽',
      isLiked: false,
    },
    {
      id: '2',
      placeFrom: 'Moscow (SVO)',
      placeIn: 'New York City (JFK)',
      date: '28 June, 2020 - 14:50',
      company: 'Aeroflot',
      price: '23 924 ₽',
      isLiked: false,
    },
    {
      id: '3',
      placeFrom: 'Moscow (SVO)',
      placeIn: 'New York City (JFK)',
      date: '28 June, 2020 - 14:50',
      company: 'Aeroflot',
      price: '23 924 ₽',
      isLiked: false,
    },
    {
      id: '4',
      placeFrom: 'Moscow (SVO)',
      placeIn: 'New York City (JFK)',
      date: '28 June, 2020 - 14:50',
      company: 'Aeroflot',
      price: '23 924 ₽',
      isLiked: false,
    },
    {
      id: '5',
      placeFrom: 'Moscow (SVO)',
      placeIn: 'New York City (JFK)',
      date: '28 June, 2020 - 14:50',
      company: 'Aeroflot',
      price: '23 924 ₽',
      isLiked: false,
    },
  ],
  favorites: [],
}

const flightReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
        favorites: state.flights.filter(flight => flight.isLiked === true)
      }
    case SET_LIKE:
      return {
        ...state,
        flights: state.flights.map((flight) => {
          if (flight.id === action.payload) {
            flight.isLiked = true;
            return flight;
          }
          return flight;
        }),
        favorites: state.flights.filter(flight => flight.isLiked === true),
      }
    case REMOVE_LIKE:
      return {
        ...state,
        flights: state.flights.map((flight) => {
          if (flight.id === action.payload) {
            flight.isLiked = false;
            return flight;
          }
          return flight;
        }),
        favorites: state.flights.filter(flight => flight.isLiked === true),
      }

    default: return state;
  }
}

export default flightReduser;