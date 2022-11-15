import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login({onLogin, isError}) {

  const { register, formState: {errors, isValid}, handleSubmit } = useForm({mode: 'onChange'});

  function submit (data) {
    onLogin(data);
}


  return(
    <section className='login'>
      <Link className='login__logo' to='/'></Link>
      <h2 className='login__heading'>Рады видеть!</h2>
      <form className='login__form' onSubmit={handleSubmit(submit)}>
        <fieldset className='login__field'>
          <label className='login__label' htmlFor='email'>E-mail</label>
          <input className='login__input'
            name='email'
            type='email'
            id='email'
            {...register('email', {required: true,
                        pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})/})}
          />
          <span className='login__span'>
            {errors.email?.type === 'required' && 'Это поле не может быть пустым'}
            {errors.email?.type === 'pattern' && 'Поле содержит некорректные данные'}
          </span>
        </fieldset>
        <fieldset className='login__field'>
          <label className='login__label' htmlFor='password'>Пароль</label>
          <input className='login__input'
            name='password'
            id='password'
            type='password'
            {...register('password', {required: true})}
          />
          <span className='login__span'>{errors.password?.type === 'required' && 'Это поле не может быть пустым'}</span>
        </fieldset>
        <p className={`login__error-message ${isError ? 'login__error-message_active':''}`}>Что-то пошло не так... Попробуйте позже!</p>
        <button className={`login__submit-button ${!isValid ? 'login__button_disabled':''}`} disabled={!isValid ? true : false} type='submit' aria-label='войти в аккаунт'>Войти</button>
      </form>
      <div className='login__container'>
        <p className='login__text'>Ещё не зарегистрированы?</p>
        <Link className='login__link' to='/signup'>Регистрация</Link>
      </div>
    </section>
  )
};

export default Login;
