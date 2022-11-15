import MoviesCard from '../MoviesCard/MoviesCard';
import { addMoviesTab, addMoviesPhone } from '../../utils/constants';
import { useState, useEffect } from 'react';

function MoviesCardList({ moviesCards, isLoad, isSavedMovie, handleMovieButtonClick, onDeleteMovie }) {

  const [moviesOnScreen, setMoviesOnScreen] = useState(0);
  const screen = window.innerWidth;

  function loadMoviesOnScreen() {
    if (screen > 1279) {
      setMoviesOnScreen(12);
    } else if(screen > 767) {
      setMoviesOnScreen(8);
    } else if(screen < 768) {
      setMoviesOnScreen(5);
    }
  }

  useEffect (() => {
    loadMoviesOnScreen();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  window.resize = () => {
    setTimeout(() => {
      loadMoviesOnScreen();
    }, 500)
  };

  function loadMoreMoviesOnScreen() {
    if (screen > 1279) {
      setMoviesOnScreen(moviesOnScreen + addMoviesTab);
    } else {
      setMoviesOnScreen(moviesOnScreen + addMoviesPhone);
    }
  }


  return(
    <section className={`movies-cards ${isLoad ? 'movies-cards_inactive' : ''}`}>
      <ul className='movies-cards__list'>

          {moviesCards.slice(0, moviesOnScreen).map((movie) => (
            <MoviesCard
              key = {movie.id || movie.movieId}
              id = {movie.id || movie._id}
              movieId = {movie.movieId}
              country = {movie.country}
              image={movie.image}
              description = {movie.description}
              nameRU={movie.nameRU}
              duration={movie.duration}
              trailerLink={movie.trailerLink}
              thumbnail = {movie.thumbnail}
              movie={movie}
              isSavedMovie={isSavedMovie}
              handleMovieButtonClick={handleMovieButtonClick}
              onDeleteMovie={onDeleteMovie}
            />
          ))}
      </ul>
      {
        (moviesCards.length > moviesOnScreen || moviesCards.length <! 3) ? (
          <button className='movies-cards__button' type='button' onClick={loadMoreMoviesOnScreen}>Ещё</button>
        ) : null
      }
    </section>
  )
};

export default MoviesCardList;
