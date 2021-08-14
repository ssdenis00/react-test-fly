import './App.css';
import Authorization from '../Authorization/Authorization';
import LoggedIn from '../LoggedIn/LoggedIn';
import { connect } from 'react-redux';

function App({ login }) {

  if (!login) {
    return (
      <div className="page">
        <Authorization />
      </div>
    );
  } else {
    return (
      <div className="page">
        <LoggedIn />
      </div >
    );
  }
}

const mapStateToProps = state => {
  return { login: state.login.login };
}

export default connect(mapStateToProps, null)(App);
