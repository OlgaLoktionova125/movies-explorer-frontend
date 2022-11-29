import { useState } from 'react';
import landingLogo  from '../../images/landing-logo.svg';
import NavTab from '../NavTab/NavTab';

function Promo() {

  const [isHidden, setIsHidden] = useState(true);

  function handleButtonClick() {
    setIsHidden(!isHidden);
  }

  return (
    <section className='promo'>
      <img className='promo__image' src={landingLogo} alt='глобус'></img>
      <div className='promo__content'>
        <h1 className='promo__heading'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className='promo__button' aria-label='узнать больше о проекте' onClick={handleButtonClick}>{`${isHidden ? 'Узнать больше' : 'Закрыть меню'}`}</button>
      </div>
      <NavTab isHidden={isHidden}/>
    </section>
  )
};

export default Promo;
