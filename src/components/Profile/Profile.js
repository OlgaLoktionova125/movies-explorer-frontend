import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';

function Profile({loggedIn, onLogout, onUserUpdate, isError, errorMessage}) {

  const currentUser = useContext(CurrentUserContext);

  const { register, formState: {errors, isValid}, handleSubmit } = useForm({mode: 'onChange'});

  function submit (data) {
    if (data.name !== currentUser.name || data.email !== currentUser.email) {
        onUserUpdate ({
            name: data.name,
            email: data.email,
        });
    } else {
        return !isValid
    }
  }

  return(
    <>
      <Header loggedIn={loggedIn}/>
      <section className='profile'>
        <h2 className='profile__heading'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' name='profileForm' onSubmit={handleSubmit(submit)}>
          <fieldset className='profile__field'>
            <label className='profile__label' htmlFor='name'>Имя</label>
            <input className='profile__input'
              name='name'
              id='name'
              type='text'
              {...register('name', {required: true,
                            minLength: 2,
                            maxLength: 30,
                            value: currentUser.name,
                            pattern: /[a-zа-яё ]/i})}
            />
          </fieldset>
          <span className='profile__span'>
            {errors.name?.type === 'required' && 'Это поле не может быть пустым'}
            {errors.name?.type === 'pattern' && 'Поле содержит некорректные данные'}
            {errors.name?.type === 'minLength' && "Минимальное значение не может быть менее 2-х символов"}
            {errors.name?.type === 'maxLength' && "Введено максимальное количество символов"}
          </span>
          <hr className='profile__hr'></hr>
          <fieldset className='profile__field'>
            <label className='profile__label' htmlFor='email'>E-mail</label>
            <input className='profile__input'
              name='email'
              id='email'
              type='email'
              {...register('email', {required: true,
                            value: currentUser.email,
                            pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})/})}
            />
          </fieldset>
          <span className='profile__span'>
            {errors.email?.type === 'required' && 'Это поле не может быть пустым'}
            {errors.email?.type === 'pattern' && 'Поле содержит некорректные данные'}
          </span>
          <p className={`profile__error-message ${isError ? 'profile__error-message_active':''}`}>{errorMessage}</p>
          <button aria-label='подтверждение' disabled={!isValid ? true : false} className={`profile__submit-button ${!isValid ? 'profile__button_disabled':''}`} type='submit'>Редактировать</button>
        </form>
        <Link className='profile__log-out' to='/' onClick={onLogout}>Выйти из аккаунта</Link>
      </section>
    </>
  )
};

export default Profile;
