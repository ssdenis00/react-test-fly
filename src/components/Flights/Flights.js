import './Flights.css';
import Flight from '../Flight/Flight';
import { useSelector } from 'react-redux';

function Flights() {
  const flights = useSelector(state => state.flights);

  return (
    <ul className="departure__flights">
      <p className="departure__favorites">Добавлено в Избранное: <span className="departure__counter">{flights.favorites.length}</span>  рейсов</p>
      {flights.flights.map((flight, i) => { return (<Flight key={i} flight={flight} index={i} />) })}
    </ul>
  )
}

export default Flights;