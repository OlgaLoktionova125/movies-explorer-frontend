/* eslint-disable react-hooks/exhaustive-deps */
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect } from 'react';

function SavedMovies({loggedIn, movies, moviesCards, message, isShort, onChecked,
                      searchMovie, isSavedMovie, onDeleteMovie, isSearched,
                      getSavedMovies, onSearched, setSearchMessage}) {

  useEffect(() => {
    if(loggedIn) {
      onSearched(false);
      setSearchMessage('');
      getSavedMovies();
    }
  }, [loggedIn]);

  return (
    <>
      <Header loggedIn={loggedIn}/>

      <SearchForm movies={movies} isShort={isShort} onChecked={onChecked} searchMovie={searchMovie} moviesCards={moviesCards}/>

      <p className = 'movies__message'>{message}</p>
      {!isSearched ?
          <MoviesCardList moviesCards={movies} isSavedMovie={isSavedMovie} onDeleteMovie={onDeleteMovie} movies={movies}/>
        : <MoviesCardList moviesCards={moviesCards} isSavedMovie={isSavedMovie} onDeleteMovie={onDeleteMovie} />
      }
      <Footer />
    </>
  )
};

export default SavedMovies;
