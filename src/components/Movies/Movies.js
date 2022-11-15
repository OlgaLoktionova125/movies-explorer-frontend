import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function Movies({loggedIn, movies, moviesCards, isLoad, message, isShort,
                 onChecked, searchMovie, isSavedMovie, handleMovieButtonClick,
                 onDeleteMovie}) {

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <SearchForm movies={movies} isShort={isShort} onChecked={onChecked} searchMovie={searchMovie} moviesCards={moviesCards}/>

      <p className = 'movies__message'>{message}</p>
      <MoviesCardList moviesCards={moviesCards} isSavedMovie={isSavedMovie} handleMovieButtonClick={handleMovieButtonClick} isLoad = {isLoad} onDeleteMovie={onDeleteMovie}/>
      <Preloader isLoad = {isLoad}/>
      <Footer />
    </>
  )
};

export default Movies;

