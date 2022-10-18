import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';

function App() {
  return (
    <div className='app'>
      <div className='app__page'>
        <Switch>
          <Route exact path='/'>
            <Header mainPage={true} loggedIn={false} />
            <Main />
            <Footer />
          </Route>
          <Route path='/movies'>
            <Header mainPage={false} loggedIn={true}/>
            <Main />
            <Footer />
          </Route>
          <Route path='/saved-movies'>
            <Header mainPage={false} loggedIn={true}/>
            <Main />
            <Footer />
          </Route>
          <Route path='/profile'>
            <Header mainPage={false} loggedIn={true}/>
            <Profile />
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='/error'>
            <Error statusCode={404} message='Страница не найдена'/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
