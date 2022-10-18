import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return(
    <section className='form'>
      <form className='form__search'>
        <input className='form__input' type='text' placeholder='Фильм'></input>
        <button className='form__button' aria-label='найти'>Найти</button>
      </form>
      <FilterCheckbox />
    </section>

  )
};

export default SearchForm;

