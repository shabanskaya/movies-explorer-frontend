import './App.css';
//import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import { Route, Switch, Redirect } from "react-router-dom";

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound'
const loggedIn = true;

function App() {
  return (
    <div className="App">
        <div className="page">
          <Switch>
            <Route path="/signin">
              <Login />
            </Route>

            <Route path="/signup">
              <Register/>
            </Route>

            <Route path="/movies">
              <Header isAuthed={true} />
              <Movies/>
              <Footer/>
            </Route>

            <Route path="/saved-movies">
              <Header isAuthed={true} />
              <SavedMovies/>
              <Footer/>
            </Route>

            <Route path="/profile">
              <Header isAuthed={true} />
              <Profile/>
            </Route>

            <Route exact path="/">
              <Header isAuthed={false}/>
              <Main />
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
            <Route path="/">
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
