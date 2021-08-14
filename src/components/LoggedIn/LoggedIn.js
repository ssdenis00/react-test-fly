import './LoggedIn.css';
import ImagesSlider from '../ImagesSlider/ImagesSlider';
import Flights from '../Flights/Flights';
import { logOut } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function LoggedIn() {

  const dispatch = useDispatch();

  function handleExitClick() {
    dispatch(logOut());
  }

  /* const date = new Date();
  setDate(date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()); */

  return (
    <>
      <button type="button" className="btn-exit" onClick={handleExitClick}>Выйти</button>
      <main className="departures">
        <div className="departures__block">
          <div className="departure__direction-block">
            <p className="departure__direction departure__title">Вылеты</p>
            <p className="departure__direction departure__routes">SVO - JFK</p>
          </div>
          <input type="date" name="calendar" className="departure__calendar"></input>
        </div>
        <ImagesSlider />
        <Flights />
      </main>
    </>
  )
}

export default LoggedIn;