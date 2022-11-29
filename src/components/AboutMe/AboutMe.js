import photo from '../../images/002403e6-b749-4859-b6f5-dd34c0f87b60.png';

function AboutMe() {
  return(
    <section className='aboutMe' id='aboutMe'>
      <h2 className='aboutMe__heading'>Студент</h2>
      <div className='aboutMe__container'>
        <div className='aboutMe__content'>
        <p className='aboutMe__name'>Ольга</p>
          <p className='aboutMe__occupation'>Веб-разработчик, 40 лет</p>
          <p className='aboutMe__description'>Я родилась и живу в г. Щелково, Московской области, закончила КККМТ по специальности
                                              "Бухгалтерский учет  и контроль". Последние несколько лет работала в продажах.
                                              С декабря 2021 г. учусь в Яндекс.Практикум на курсе "Веб-разработчик".
          </p>
          <a className='aboutMe__git' href='https://github.com/OlgaLoktionova125' target='_blank' rel='noreferrer'>Github</a>
        </div>
        <img className='aboutMe__image' src={photo} alt='фотография разработчика приложения'></img>
      </div>
    </section>
  )
};

export default AboutMe;
