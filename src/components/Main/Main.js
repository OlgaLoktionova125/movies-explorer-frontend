import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import { Route } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Main() {
    return(
        <main className='main'>
          <Route exact path='/'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
          </Route>
          <Route path='/movies'>
            <SearchForm />
            <MoviesCardList />
          </Route>
          <Route path='/saved-movies'>
            <SearchForm />
            <MoviesCardList />
          </Route>
        </main>
    )
}

export default Main;
