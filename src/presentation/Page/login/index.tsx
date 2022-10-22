import style from './styles.module.css';

function Login() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Bem vindo ao Gymr</h1>
      </header>
      <main className={style.main_login}>
        <div className={style.form_control}>
          <button className={style.btn} type="button">Entrar</button>
          <button className={style.btn} type="button">Cadastrar</button>
        </div>
        <div>
          <a href="/" className={style.btn_link}>
            lembrar
            {' '}
            <span> senha </span>
          </a>
        </div>

      </main>

    </div>
  );
}
export default Login;
