import photo from '../../images/git.jpg';

function AboutMe() {
  return(
    <section className='aboutMe' id='aboutMe'>
      <h2 className='aboutMe__heading'>Студент</h2>
      <div className='aboutMe__container'>
        <div className='aboutMe__content'>
        <p className='aboutMe__name'>Ольга</p>
          <p className='aboutMe__occupation'>Веб-разработчик</p>
          <p className='aboutMe__description'>Я родилась и живу в г. Щелково, Московской области. Я более семи лет работала в продажах. Сокращение уровня
                                              офф-лайн продаж и соответственно моей заработной платы после пандемии привело меня к выводу,
                                              что надо менять сферу деятельности. В ноябре 2022 г. закончила курс веб-разработки Яндек.Практикум.
          </p>
          <a className='aboutMe__git' href='https://github.com/OlgaLoktionova125' target='_blank' rel='noreferrer'>Github</a>
        </div>
        <img className='aboutMe__image' src={photo} alt='фотография разработчика приложения'></img>
      </div>
    </section>
  )
};

export default AboutMe;
