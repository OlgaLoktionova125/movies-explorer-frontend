/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';
import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';
import Movies from '../Movies/Movies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { shortDuration, moviesUrl } from '../../utils/constants';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {

  const history = useHistory();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [moviesCards, setMoviesCards] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Что-то пошло не так... Попробуйте позже!');
  const [savedMoviesCards, setSavedMoviesCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isShort, setIsShort] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const [savedSearchedMoviesCards, setSavedSearchedMoviesCards] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [profileMessage, setProfileMessage] = useState('');

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([moviesApi.getMovies(), mainApi.getCurrentUser()])
        .then(([movies, info]) => {
          setCurrentUser(info);
          localStorage.setItem('movies', JSON.stringify(movies));
          setMovies(JSON.parse(localStorage.getItem('movies')));
        })
        .catch((err) => {
          console.log(err);
          setSearchMessage('Что-то пошло не так... Попробуйте позже!');
        })

        getSavedMovies();
        setIsError(false);

        if (localStorage.getItem('moviesCards')) {
          const loadedMovies = JSON.parse(localStorage.getItem('moviesCards'));
          setMoviesCards(loadedMovies.map((movie) => ({
            movieId: movie.id,
            country: movie.country,
            image: `${moviesUrl}/${movie.image.url}`,
            description: movie.description,
            duration: movie.duration,
            nameEN: movie.nameEN,
            nameRU: movie.nameRU,
            year: movie.year,
            trailerLink: movie.trailerLink,
            director: movie.director,
            thumbnail: `${moviesUrl}/${movie.image.url}`
          })));
        }
    }
  }, [loggedIn]);

  function getSavedMovies() {

    mainApi.getMovies()
      .then((movies) => {
        setSavedMoviesCards(
          movies.map((movie) => ({
            id: movie._id,
            movieId: movie.movieId,
            country: movie.country,
            image: movie.image,
            description: movie.description,
            duration: movie.duration,
            nameEN: movie.nameEN,
            nameRU: movie.nameRU,
            year: movie.year,
            trailerLink: movie.trailerLink,
            director: movie.director,
            thumbnail: movie.thumbnail,
            owner: movie.owner
          })).filter((movie => movie.owner === currentUser._id))
        );
      })
      .catch(err => console.log(err));
  }

  function onRegister({email, password, name}) {
    auth.register(email, password, name)
      .then((data) => {
        if (data) {
          onLogin({email, password});
        }
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        if (err.statusCode === 409) {
          setErrorMessage('Пользователь с таким адресом почты уже существует');
        }
      })
  };

  function onLogin({email, password}) {
    auth.login(email, password)
      .then((data) => {
        setLoggedIn(true);
        localStorage.setItem("jwt", data.token);
        mainApi.setJwt(data.token);
        history.push('/movies')
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  };

  function onLogout() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('text');
    localStorage.removeItem('movies');
    localStorage.removeItem('moviesCards');
    localStorage.removeItem('isShort');
    setMoviesCards([]);
    setSavedSearchedMoviesCards([]);
    setCurrentUser({});
    history.push('/')
  };

  function handleUpdateUser({name, email}) {
    mainApi.updateUserInfo({
      name: name,
      email: email
    })
      .then((res) => {
        setCurrentUser(res);
        setProfileMessage('Данные успешно обновлены!')
      })
      .catch((err) => {
        console.log(err);
        if (err.statusCode === 409) {
          setProfileMessage('Пользователь с таким адресом почты уже существует!');
        } else {
          setProfileMessage('Что-то пошло не так... Попробуйте позже!');
        }
      })
  };

  function checkToken() {

    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth.checkToken(jwt)
        .then(data => {
          setIsError(false);
          setLoggedIn(true);
          setCurrentUser(data);
          history.push(location.pathname);
        })
        .catch((err) => {
          console.log(err);
          onLogout();
        })
    } else {
        setLoggedIn(false);
    }
  }

  function searchMovie (text, movies) {
    const searchedMovies = movies.filter((movie) => (
      movie.nameRU.toLowerCase().includes(text.toLowerCase())) && (isShort === true ? movie.duration <= shortDuration : ' '));

      if (location.pathname === '/movies') {
        setSearchMessage('');
        setIsLoad(true);

        setTimeout(() => {
          setIsLoad(false);
          if (searchedMovies.length === 0) {
            setSearchMessage('По Вашему запросу ничего не найдено')
          } else {
            setSearchMessage('');
          }

          getSavedMovies();

          setMoviesCards(searchedMovies.map((movie) => ({
            movieId: movie.id,
            country: movie.country,
            image: `${moviesUrl}/${movie.image.url}`,
            description: movie.description,
            duration: movie.duration,
            nameEN: movie.nameEN,
            nameRU: movie.nameRU,
            year: movie.year,
            trailerLink: movie.trailerLink,
            director: movie.director,
            thumbnail: `${moviesUrl}/${movie.image.url}`
          })))


        }, 2000);

        localStorage.setItem('moviesCards', JSON.stringify(searchedMovies))

      } else {
        setIsSearched(true);
        if (searchedMovies.length === 0) {
          setSearchMessage('По Вашему запросу ничего не найдено');
        } else {
          setSearchMessage('');
        }
        setSavedSearchedMoviesCards(searchedMovies);
      }
  };

  function isSavedMovie(movie) {
    const result = savedMoviesCards.some((item) => {
      if (item.movieId === movie.movieId) {
        return item;
      }
    })
    return result;
  };

  function handleMovieButtonClick(movie) {
    if(isSavedMovie(movie) === false) {
      saveMovie(movie)
    } else {
      deleteMovie(movie)
    }
  };

  function saveMovie(movie) {
    mainApi.createMovie(movie)
      .then((movie) => {
        getSavedMovies([movie, ...savedMoviesCards])
      })
      .catch((err) => console.log(err));
  };

  function deleteMovie(movie) {
    savedMoviesCards.forEach((item) => {
      if(item.movieId === movie.movieId) {
        onDeleteMovie(item);
      }
    })
  };

  function onDeleteMovie(movie) {
    mainApi.deleteMovie(movie, movie.id)
      .then(() => {
        const resultForMovies = savedMoviesCards.filter ( item => item.id !== movie.id || item.movieId !== movie.movieId);
        const resultForSavedMovies = savedSearchedMoviesCards.filter ( item => item.id !== movie.id || item.movieId !== movie.movieId);
        setSavedMoviesCards(resultForMovies);
        setSavedSearchedMoviesCards(resultForSavedMovies);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <div className='app__page'>
          <Switch>
            <Route exact path='/'>
              <Main loggedIn={loggedIn}/>
            </Route>
            <Route path='/signup'>
              {loggedIn
              ? <Redirect to='/movies' />
              : <Register onRegister={onRegister} isError={isError} errorMessage={errorMessage}/>}
            </Route>
            <Route path='/signin'>
              {loggedIn
              ? <Redirect to='/movies' />
              : <Login onLogin={onLogin} isError={isError}/>}
            </Route>
            <ProtectedRoute
              exact
              path='/movies'
              component={Movies}
              loggedIn={loggedIn}
              moviesCards={moviesCards}
              isLoad={isLoad}
              message={searchMessage}
              isShort={isShort}
              searchMovie = {searchMovie}
              isSavedMovie={isSavedMovie}
              handleMovieButtonClick={handleMovieButtonClick}
              movies={movies}
              onChecked={setIsShort}
            />
            <ProtectedRoute
              exact
              path='/saved-movies'
              component={SavedMovies}
              loggedIn={loggedIn}
              moviesCards={savedSearchedMoviesCards}
              message={searchMessage}
              isShort={isShort}
              searchMovie = {searchMovie}
              onDeleteMovie={onDeleteMovie}
              movies={savedMoviesCards}
              onChecked={setIsShort}
              isSearched={isSearched}
              getSavedMovies={getSavedMovies}
              onSearched={setIsSearched}
              setSearchMessage={setSearchMessage}
            />
            <ProtectedRoute
              exact
              path='/profile'
              component={Profile}
              onLogout={onLogout}
              loggedIn={loggedIn}
              onUserUpdate={handleUpdateUser}
              profileMessage={profileMessage}
            />
            <Route path = '*'>
              <Error />
            </Route>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
