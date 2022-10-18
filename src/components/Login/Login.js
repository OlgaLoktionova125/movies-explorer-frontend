import { Link } from "react-router-dom";

function Login() {
  return(
    <section className='login'>
      <Link className='login__logo' to='/'></Link>
      <h2 className='login__heading'>Рады видеть!</h2>
      <form className='login__form'>
        <fieldset className='login__field'>
          <label className='login__label' htmlFor='email'>E-mail</label>
          <input className='login__input' name='email' type='email' placeholder='E-mail'></input>
          <span className='login__span'>Что-то пошло не так...</span>
        </fieldset>
        <fieldset className='login__field'>
          <label className='login__label' htmlFor='password'>Пароль</label>
          <input className='login__input' name='password' type='password' placeholder='Пароль'></input>
          <span className='login__span'></span>
        </fieldset>
        <button className='login__submit-button'>Войти</button>
      </form>
      <div className='login__container'>
        <p className='login__text'>Ещё не зарегистрированы?</p>
        <Link className='login__link' to='/signup'>Регистрация</Link>
      </div>
    </section>
  )
};

export default Login;
