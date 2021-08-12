import './Flights.css';
import Flight from '../Flight/Flight';

function Flights() {
  return (
    <ul className="departure__flights">
      <p className="departure__favorites">Добавлено в Избранное: <span className="departure__counter">10</span>  рейсов</p>
      <Flight />
    </ul>
  )
}

export default Flights;