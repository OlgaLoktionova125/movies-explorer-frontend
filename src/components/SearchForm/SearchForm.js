import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ searchMovie, movies, onChecked, isShort }) {

  const location = useLocation();

  const [newValue, setNewValue] = useState(localStorage.getItem('text') || '');

  const { register, formState: {errors}, handleSubmit} = useForm({mode: 'onChange'});

  function onSubmit(data) {
    searchMovie(data.text, movies)
    // if (location.pathname === '/movies') {
    //   localStorage.setItem('text', data.text)
    // }
  }

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') {
        e.preventDefault();
    }
  };

  function handleChangeValue (e) {
      setNewValue(e.target.value);
  };

  return(
    <section className='form'>
      <form className='form__search' onSubmit = {handleSubmit(onSubmit)} onKeyDown={checkKeyDown} noValidate>
        <input className='form__input'
              type='text'
              name='search'
              {...register('text', {required: 'Введите слово для поиска',
                            value: location.pathname === '/movies'? newValue : ''})}
              placeholder='Фильм'
              onChange={handleChangeValue}
        />
        <button className='form__button' aria-label='найти' type='submit'>Найти</button>
        <span className='form__error'>{errors.text?.message}</span>
      </form>
      <FilterCheckbox
        onChecked={onChecked}
        searchMovie={searchMovie}
        isShort={isShort}
        text={newValue}
        movies={movies}
      />
    </section>

  )
};

export default SearchForm;

