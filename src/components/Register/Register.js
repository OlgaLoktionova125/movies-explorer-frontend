import { Link } from "react-router-dom";

function Register() {
  return(
    <section className='register'>
      <Link className='register__logo' to='/'></Link>
      <h2 className='register__heading'>Добро пожаловать!</h2>
      <form className='register__form'>
        <fieldset className='register__field'>
          <label className='register__label' htmlFor='name'>Имя</label>
          <input className='register__input' name='name' placeholder='Имя' type='text' required></input>
          <span className='register__span'>Что-то пошло не так...</span>
        </fieldset>
        <fieldset className='register__field'>
          <label className='register__label' htmlFor='email'>E-mail</label>
          <input className='register__input' name='email' placeholder='E-mail' type='email' required></input>
          <span className='register__span'>Что-то пошло не так...</span>
        </fieldset>
        <fieldset className='register__field'>
          <label className='register__label' htmlFor='password'>Пароль</label>
          <input className='register__input' name='password' placeholder='Пароль' type='password' required></input>
          <span className='register__span'>Что-то пошло не так...</span>
        </fieldset>
        <button className='register__submit-button' type='submit' aria-label='Зарегистрироваться'>Зарегистрироваться</button>
      </form>
      <div className='register__container'>
        <p className='register__text'>Уже зарегистрированы?</p>
        <Link className='register__link' to='/signin'>Войти</Link>
      </div>
    </section>
  )
};

export default Register;
