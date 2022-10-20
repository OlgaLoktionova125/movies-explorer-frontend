import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return(
        <header className={`header ${props.mainPage ? 'header__mainPage' : 'header__notMainPage'}`}>
            <Link className='header__logo' to='/'></Link>
            <Navigation loggedIn={props.loggedIn}/>
        </header>
    )
}

export default Header;
