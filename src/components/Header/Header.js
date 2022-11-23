import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({loggedIn}) {
    return(
        <header className={`header ${loggedIn ? 'header__loggedIn' : 'header__notLoggedIn'}`}>
            <Link className='header__logo' to='/'></Link>
            <Navigation loggedIn={loggedIn}/>
        </header>
    )
}

export default Header;
