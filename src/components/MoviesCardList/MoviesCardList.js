import MoviesCard from '../MoviesCard/MoviesCard';
import { movies } from '../../utils/movies';
import { savedMovies } from '../../utils/savedMovies';
import { Route } from 'react-router-dom';

function MoviesCardList() {
  return(
    <section className='movies'>
      <ul className='movies__list'>
        <Route path='/movies'>
          {movies.map((movie) => (
            <MoviesCard
              key = {movie.id}
              link={movie.image.url}
              name={movie.nameRU}
              duration={movie.duration}
              buttonContent={'Сохранить'}
              buttonClassName={'card__button card__button_type_save'}
            />
          ))}
        </Route>
        <Route path='/saved-movies'>
          {savedMovies.map((movie, index) => (
            <MoviesCard
              key = {movie.id}
              link={movie.image.url}
              name={movie.nameRU}
              duration={movie.duration}
              buttonClassName={'card__button card__button_type_delete'}
            />
          ))}
        </Route>
      </ul>
      <button className='movies__button'>Ещё</button>
    </section>
  )
};

export default MoviesCardList;
