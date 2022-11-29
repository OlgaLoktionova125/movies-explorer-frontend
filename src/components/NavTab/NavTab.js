function NavTab({isHidden}) {
  return(
    <nav className={`${isHidden ? 'navTab_hidden' : 'navTab_active'}`}>
      <ul className='navTab__list'>
        <li className='navTab__item'><a href='#about' className='navTab__link'>О проекте</a></li>
        <li className='navTab__item'><a href='#techs' className='navTab__link'>Технологии</a></li>
        <li className='navTab__item'><a href='#aboutMe' className='navTab__link'>Об авторе</a></li>
        <li className='navTab__item'><a href='#portfolio' className='navTab__link'>Портфолио</a></li>
      </ul>
    </nav>
  )
};

export default NavTab;
