import landingLogo  from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className='promo'>
      <img className='promo__image' src={landingLogo} alt="глобус"></img>
      <div className='promo__content'>
        <h1 className='promo__heading'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className='promo__button' aria-label='узнать больше о проекте' >Узнать больше</button>
      </div>
    </section>
  )
};

export default Promo;
