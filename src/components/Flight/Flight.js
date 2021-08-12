import './Flight.css';
import logo from '../../images/logo-aero.svg'

function Flight() {
  return (
    <li className="departure__flight">
      <div className="departure__flight-info">
        <img src={logo} className="departure__logo" alt="logo" />
        <div>
          <div className="departure__flight-aeroports">
            <p className="departure__flight-from">Moscow (SVO)</p>
            <p className="departure__flight-in">New York City (JFK)</p>
          </div>
          <div>
            <p className="departure__flight-date">28 June, 2020 - 14:50</p>
            <p className="departure__flight-company">Aeroflot</p>
          </div>
        </div>
      </div>
      <div className="departure__price-block">
        <button className="departure__like"></button>
        <p className="departure__cost"><span className="departure__price-title">Price:</span>23 924 ₽</p>
      </div>
    </li>
  )
}

export default Flight;