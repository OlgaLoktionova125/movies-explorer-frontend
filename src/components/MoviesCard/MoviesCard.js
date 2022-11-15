import { useLocation } from 'react-router-dom';

function MoviesCard({nameRU, image, duration, trailerLink, isSavedMovie, handleMovieButtonClick, onDeleteMovie, movie}) {

  const location = useLocation();

  function getTime(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return minutes < 10 ? `${hours}ч 0${minutes}м` : `${hours}ч ${minutes}м`;
  };

  return(
    <li className='card'>
      <a className='card__trailerLink' href={trailerLink} target='_blank' rel='noreferrer'>
        <img className='card__image' alt={`постер к фильму ${nameRU}`} src={image}></img>
      </a>


      {
        (location.pathname === '/movies')
        ? (<button aria-label='' className={`card__button ${isSavedMovie(movie) ? 'card__button_type_saved' : 'card__button_type_save'}`}
             type='button'
             onClick={()=>handleMovieButtonClick(movie)}>
            {!isSavedMovie(movie) && 'Сохранить'}
          </button>)
        : (<button aria-label='' className='card__button card__button_type_delete'
             type='button'
             onClick={()=>onDeleteMovie(movie)}></button>)
      }

      <div className='card__content'>
        <p className='card__movieName'>{nameRU}</p>
        <p className='card__movieDuration'>{getTime(duration)}</p>
      </div>
    </li>
  )
};

export default MoviesCard;
