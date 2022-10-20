import { Link } from "react-router-dom";

function Error(props) {
  return(
    <section className='error'>
      <p className='error__statusCode'>{props.statusCode}</p>
      <p className='error__message'>{props.message}</p>
      <Link className='error__link' to='/'>Назад</Link>
    </section>
  )
};

export default Error;
