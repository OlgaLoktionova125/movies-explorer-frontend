import arrow from '../../images/arrow.svg';

function Portfolio() {
  return(
    <section className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <p className='portfolio__text'>Статичный сайт</p>
          <a className='portfolio__link' href='https://olgaloktionova125.github.io/how-to-learn/index.html' target='_blank' rel='noreferrer'>
            <img className='portfolio__image' src={arrow} alt='стрелка'></img>
          </a>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio__text'>Адаптивный сайт</p>
          <a className='portfolio__link' href='https://olgaloktionova125.github.io/russian-travel/index.html' target='_blank' rel='noreferrer'>
            <img className='portfolio__image' src={arrow} alt='стрелка'></img>
          </a>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio__text'>Одностраничное приложение</p>
          <a className='portfolio__link' href='https://backendmesto.nomoredomains.sbs/' target='_blank' rel='noreferrer'>
            <img className='portfolio__image' src={arrow} alt='стрелка'></img>
          </a>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;
