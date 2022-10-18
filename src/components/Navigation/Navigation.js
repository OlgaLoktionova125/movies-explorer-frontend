import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {

  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return(
    <section className='navigation'>
      {
        !props.loggedIn &&
        <nav className='navigation__notLoggedin'>
          <Link className='navigation__sign-up navigation__link' to='/signup'>Регистрация</Link>
          <Link className='navigation__sign-in' to='/signin'>Войти</Link>
        </nav>
      }
      {
        props.loggedIn &&
        <nav className={`navigation__loggedIn ${!isOpen ? 'navigation__loggedIn_inactive':''}`}>
          <Link className={`navigation__link ${!isOpen ? 'navigation__link_inactive' : ''}`} onClick={closeMenu} to='/'>Главная</Link>
          <Link className='navigation__link'  onClick={closeMenu} to='/movies'>Фильмы</Link>
          <Link className='navigation__link'  onClick={closeMenu} to='/saved-movies'>Сохранённые фильмы</Link>
          <Link className='navigation__link navigation__link_profile'  onClick={closeMenu} to='/profile'>
            <p>Аккаунт</p>
            <div className='navigation__profile'></div>
          </Link>
        </nav>
      }
      <button className={`navigation__close-button ${!isOpen ? 'navigation__close-button_inactive':''}`} onClick={closeMenu}></button>
      <button className={`navigation__button ${props.loggedIn ? 'navigation__button_active': ''}`} onClick={openMenu}></button>
    </section>
  )
}

export default Navigation;
