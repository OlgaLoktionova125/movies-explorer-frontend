function getTime(mins) {
  let hours = Math.trunc(mins/60);
  let minutes = mins % 60;
  return minutes < 10 ? `${hours}ч 0${minutes}м` : `${hours}ч ${minutes}м`;
};

function MoviesCard(props) {
  return(
    <li className='card'>
      <img className='card__image' alt={`постер к фильму ${props.name}`} src={props.link}></img>
      <button aria-label='' className={props.buttonClassName}>{props.buttonContent}</button>
      <div className='card__content'>
        <p className='card__movieName'>{props.name}</p>
        <p className='card__movieDuration'>{getTime(props.duration)}</p>
      </div>
    </li>
  )
};

export default MoviesCard;
