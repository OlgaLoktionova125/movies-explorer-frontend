/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FilterCheckbox({onChecked, movies, searchMovie, isShort, text}) {

  const location = useLocation();

  const [isChecked, setIsChecked] = useState(false);

  function handleCheckedState() {
    onChecked(!isShort);
    setIsChecked(true);
    if (location.pathname === '/movies'){
      localStorage.setItem('isShort', !isShort);
    }
  }

  useEffect(() => {
    if (location.pathname === '/movies'){
      if (localStorage.getItem('isShort')) {
          onChecked(JSON.parse(localStorage.getItem('isShort')));
      }
    }

    if (location.pathname === '/saved-movies'){
        onChecked(false);
     }

  }, [location]);

  useEffect(() => {
    if (isChecked === true) {
      searchMovie(text, movies)
    }
  }, [isShort, isChecked]);

  return(
    <div className='checkbox'>
      <input className='checkbox__input'
             type='checkbox'
             id='checkbox'
             checked={isShort}
             onChange={handleCheckedState}
      />
      <label className='checkbox__label' htmlFor='checkbox'></label>
      <span className='checkbox__span'>Короткометражки</span>
    </div>
  )
};

export default FilterCheckbox;
