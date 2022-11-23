import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register({onRegister, isError, errorMessage}) {

  const { register, formState: {errors, isValid}, handleSubmit } = useForm({mode: 'onChange'});

    function submit (data) {
        onRegister(data);
    }

  return(
    <section className='register'>
      <Link className='register__logo' to='/'></Link>
      <h2 className='register__heading'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit(submit)}>
        <fieldset className='register__field'>
          <label className='register__label' htmlFor='name'>Имя</label>
          <input className='register__input'
            name='name'
            type='text'
            id='name'
            {...register('name', {required: true,
                            minLength: 2,
                            maxLength: 30,
                            pattern: /[a-zа-яё ]/i})}
          />
          <span className='register__span'>
            {errors.name?.type === 'required' && 'Это поле не может быть пустым'}
            {errors.name?.type === 'pattern' && 'Поле содержит некорректные данные'}
            {errors.name?.type === 'minLength' && "Минимальное значение не может быть менее 2-х символов"}
            {errors.name?.type === 'maxLength' && "Введено максимальное количество символов"}
          </span>
        </fieldset>
        <fieldset className='register__field'>
          <label className='register__label' htmlFor='email'>E-mail</label>
          <input className='register__input'
            name='email'
            type='email'
            id='email'
            {...register('email', {required: true,
                        pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})/})}
          />
          <span className='register__span'>
            {errors.email?.type === 'required' && 'Это поле не может быть пустым'}
            {errors.email?.type === 'pattern' && 'Поле содержит некорректные данные'}
          </span>
        </fieldset>
        <fieldset className='register__field'>
          <label className='register__label' htmlFor='password'>Пароль</label>
          <input className='register__input'
            name='password'
            type='password'
            id='password'
            {...register('password', {required: true})}
          />
          <span className={`register__span ${isError ? 'register__span_active' : ''}`}>{errors.password?.type === 'required' && 'Это поле не может быть пустым'}</span>
        </fieldset>
        <p className={`register__error-message ${isError ? 'register__error-message_active':''}`}>{errorMessage}</p>
        <button className={`register__submit-button ${!isValid ? 'register__button_disabled':''}`}  type='submit' aria-label='Зарегистрироваться'>Зарегистрироваться</button>
      </form>
      <div className='register__container'>
        <p className='register__text'>Уже зарегистрированы?</p>
        <Link className='register__link' to='/signin'>Войти</Link>
      </div>
    </section>
  )
};

export default Register;
