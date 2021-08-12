import './LoggedIn.css';
import ImagesSlider from '../ImagesSlider/ImagesSlider';
import Flights from '../Flights/Flights';

function LoggedIn() {
  return (
    <>
      <button type="button" className="btn-exit">Выйти</button>
      <main className="departures">
        <div className="departures__block">
          <p className="departure__direction">Вылеты > SVO - JFK</p>
          <input type="date" name="calendar" className="departure__calendar"></input>
        </div>
        <ImagesSlider />
        <Flights />
      </main>
    </>
  )
}

export default LoggedIn;