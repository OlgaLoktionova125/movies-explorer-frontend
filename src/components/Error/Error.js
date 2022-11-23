import { useHistory } from "react-router-dom";

function Error() {

  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return(
    <section className='error'>
      <p className='error__statusCode'>{404}</p>
      <p className='error__message'>Страница не найдена</p>
      <button className='error__button' onClick={handleClick}>Назад</button>
    </section>
  )
};

export default Error;
