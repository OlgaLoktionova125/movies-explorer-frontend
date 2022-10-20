import { Link } from 'react-router-dom';

function Profile() {
  return(
    <section className='profile'>
      <h2 className='profile__heading'>Привет, Ольга!</h2>
      <form className='profile__form' name='profileForm'>
        <fieldset className='profile__field'>
          <label className='profile__label' htmlFor='name'>Имя</label>
          <input className='profile__input' name='name' id='name' placeholder='Ольга'></input>
        </fieldset>
        <hr className='profile__hr'></hr>
        <fieldset className='profile__field'>
          <label className='profile__label' htmlFor='email'>E-mail</label>
          <input className='profile__input' name='email' id='email' placeholder='pochta@yandex.ru'></input>
        </fieldset>
        <button aria-label='подтверждение' className='profile__submit-button' type='submit'>Редактировать</button>
      </form>
      <Link className='profile__log-out' to='/'>Выйти из аккаунта</Link>
    </section>
  )
};

export default Profile;
