import './LoggedIn.css';
import ImagesSlider from '../ImagesSlider/ImagesSlider';
import Flights from '../Flights/Flights';
import { logOut } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';
import { useState } from 'react';

function LoggedIn() {

  const [date, setDate] = useState(moment().locale('ru').format('YYYY-MM-DD'))

  const dispatch = useDispatch();

  function handleExitClick() {
    dispatch(logOut());
  }

  // форматирую дату для вывода
  function formatDate(date) {
    const myDate = new Date(date);
    const d = myDate.getDate();
    let m = myDate.getMonth() + 1;
    const y = myDate.getFullYear();

    switch (m) {
      case 1: m = 'Января'
        break;
      case 2: m = 'Февраля'
        break;
      case 3: m = 'Марта'
        break;
      case 4: m = 'Апреля'
        break;
      case 5: m = 'Мая'
        break;
      case 6: m = 'Июня'
        break;
      case 7: m = 'Июля'
        break;
      case 8: m = 'Августа'
        break;
      case 9: m = 'Сентября'
        break;
      case 10: m = 'Октября'
        break;
      case 11: m = 'Ноября'
        break;
      case 12: m = 'Декабря'
        break;
      default: m = 'Месяц'
    }

    return d + " " + m + " " + y;
  }

  return (
    <>
      <button type="button" className="btn-exit" onClick={handleExitClick}>Выйти</button>
      <main className="departures">
        <div className="departures__block">
          <div className="departure__direction-block">
            <p className="departure__direction departure__title">Вылеты</p>
            <p className="departure__direction departure__routes">SVO - JFK</p>
          </div>
          <div className="departure__calendar-block">
            <p className="departure__calendar-data">{formatDate(date)}</p>
            <input type="date" name="calendar" value={date} onChange={(e) => { setDate(e.target.value) }} className="departure__calendar"></input>
          </div>
        </div>
        <ImagesSlider />
        <Flights />
      </main>
    </>
  )
}

export default LoggedIn;