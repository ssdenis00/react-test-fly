import './Authorization.css'
import { hideValidateErr, logIn, showValidateErr } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
/* import { fetchFlights } from '../../redux/actions'; */

function Authorization() {

  const [emailValue, setEmailValue] = useState('');
  const [passValue, setPassValue] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state.login);

  const classEmailLable = `authorization__label ${state.email ? 'authorization__label_type_err' : ''}`;
  const classEmailInput = `authorization__input  ${state.email ? 'authorization__input_type_err' : ''}`;
  const classPassLable = `authorization__label ${state.pass ? 'authorization__label_type_err' : ''}`;
  const classPassInput = `authorization__input  ${state.pass ? 'authorization__input_type_err' : ''}`;

  const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const rePass = /(?=^.{8,}$)^[a-zA-Z0-9]+$/;

  let errEmail = '';
  if (state.email) {
    errEmail = 'Введите почту'

  } else {
    errEmail = '';
  }

  let errPass = '';
  if (state.pass) {
    errPass = 'Пароль без кирилицы, минимум 8 символов'
  } else {
    errPass = '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (emailValue === "" || passValue === "") {
      checkValidate(reEmail, 'email', emailValue);
      checkValidate(rePass, 'pass', passValue);
    } else {
      dispatch(logIn());
      /* dispatch(fetchFlights()); */
    }
  }

  const checkValidate = (regular, inputName, value) => {
    if (!regular.test(value)) {
      dispatch(showValidateErr({ input: inputName, state: true }));
    } else {
      dispatch(hideValidateErr({ input: inputName, state: false }));
    }
  }

  function handleChangeInputEmail(e) {
    setEmailValue(e.target.value);
    checkValidate(reEmail, 'email', emailValue);
  }

  function handleChangeInputPassword(e) {
    setPassValue(e.target.value);
    checkValidate(rePass, 'pass', passValue);
  }



  return (
    <main className="authorization">
      <div className="authorization__block">
        <h2 className="authorization__title">Simple Flight Check</h2>
        <form className="authorization__form" action="#" onSubmit={handleSubmit} noValidate>
          <label className={classEmailLable}>Логин:</label>
          <input type="email" name="email" value={emailValue || ""} onChange={handleChangeInputEmail} className={classEmailInput} />
          <span className="authorization__err">{errEmail}</span>
          <label className={classPassLable}>Пароль:</label>
          <input type="password" name="pass" value={passValue || ""} onChange={handleChangeInputPassword} className={classPassInput} />
          <span className="authorization__err">{errPass}</span>
          <button type="submit" className="authorization__btn">Войти</button>
        </form>
      </div>
    </main>
  )
}


export default Authorization;