import './Flight.css';
import logo from '../../images/logo-aero.svg'
import { useDispatch } from 'react-redux';
import { setLike, removeLike } from '../../redux/actions';


function Flight(props) {
  const dispatch = useDispatch();
  const classLike = `departure__like ${props.flight.isLiked ? 'departure__like_active' : ''}`;

  function handleLikeClick() {
    if (!props.flight.isLiked) {
      dispatch(setLike(props.flight.id));
    } else {
      dispatch(removeLike(props.flight.id));
    }

  }

  return (
    <li className="departure__flight">
      <div className="departure__flight-info">
        <img src={logo} className="departure__logo" alt="logo" />
        <div>
          <div className="departure__flight-aeroports">
            <p className="departure__flight-from">{props.flight.placeFrom}</p>
            <p className="departure__flight-in">{props.flight.placeIn}</p>
          </div>
          <div>
            <p className="departure__flight-date">{props.flight.date}</p>
            <p className="departure__flight-company">{props.flight.company}</p>
          </div>
        </div>
      </div>
      <div className="departure__price-block">
        <button className={classLike} onClick={handleLikeClick} aria-label="like"></button>
        <p className="departure__cost"><span className="departure__price-title">Price:</span>{props.flight.price}</p>
      </div>
    </li>
  )
}

export default Flight;