import { Link, useNavigate } from 'react-router-dom';
import style from './styles.module.css';

function Main() {
  const navigate = useNavigate();
  function handlePageCadastro() {
    navigate('novousuario');
  }
  function handlePageInicial() {
    navigate('treino');
  }

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Bem vindo ao Gymr</h1>
      </header>
      <main className={style.main_login}>
        <div className={style.form_control}>

          <button
            onClick={handlePageInicial}
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
    </div>
  );
}
export default Main;
