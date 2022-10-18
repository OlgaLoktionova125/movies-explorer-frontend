function AboutProject() {
  return (
    <section className='about' id='about'>
      <h2 className='about__heading'>О проекте</h2>
      <ul className='about__description'>
        <li className='about__description-item'>
          <h3 className='about__description-heading'>Дипломный проект включал 5 этапов</h3>
          <p className='about__description-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about__description-item'>
          <h3 className='about__description-heading'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__description-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about__schema'>
        <div className='about__duration-backend'>1 неделя</div>
        <div className='about__duration-frontend'>4 недели</div>
        <p className='about__schema-text'>Back-end</p>
        <p className='about__schema-text'>Front-end</p>
      </div>
    </section>
  )
};

export default AboutProject;
