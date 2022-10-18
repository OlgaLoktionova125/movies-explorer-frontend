function FilterCheckbox() {
  return(
    <div className='checkbox'>
      <input className='checkbox__input' type='checkbox' id='switch' />
      <label className='checkbox__label' htmlFor='switch'>Toggle</label>
      <span className='checkbox__span'>Короткометражки</span>
    </div>
  )
};

export default FilterCheckbox;
