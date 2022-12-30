import { Link, useNavigate } from 'react-router-dom';
import Container from '../../Components/Container';
import Header from '../../Components/Header';
import style from './styles.module.css';

function Main() {
  const navigate = useNavigate();
  function handlePageCadastro() {
    navigate('novousuario');
  }
  function handlePageLogin() {
    navigate('login');
  }

  return (
    <Container>
      <Header title="Bem vindo ao Gymr" />
      <main className={style.main_login}>
        <div className={style.form_control}>

          <button
            onClick={handlePageLogin}
            className={style.btn}
            type="button"
          >
            Entrar
          </button>
          <button
            onClick={handlePageCadastro}
            className={style.btn}
            type="button"
          >
            Cadastrar
          </button>
        </div>
        <div>
          <Link to="lembrarsenha" className={style.btn_link} type="button">
            lembrar
            {' '}
            <span> senha </span>
          </Link>

        </div>
      </main>
    </Container>
  );
}
export default Main;
