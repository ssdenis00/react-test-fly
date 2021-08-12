import './Authorization.css'

function Authorization() {
  return (
    <main className="authorization">
      <div className="authorization__block">
        <h2 className="authorization__title">Simple Flight Check</h2>
        <form className="authorization__form" action="#">
          <label className="authorization__label">Логин:</label>
          <input type="email" className="authorization__input" />
          <label className="authorization__label">Пароль:</label>
          <input type="password" className="authorization__input" />
          <button type="submit" className="authorization__btn">Войти</button>
        </form>
      </div>
    </main>
  )
}

export default Authorization;