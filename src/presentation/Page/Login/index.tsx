import { Link } from 'react-router-dom';
import Container from '../../Components/Container';
import Header from '../../Components/Header';
import Nav from '../../Components/Nav';
import style from './styles.module.css';

function Login() {
  return (
    <Container data-testid="login">
      <Nav path="/" />
      <Header title="Entrar com email" />
      <main className={style.main_login}>
        <div className={style.form_control}>
          <div className={style.form_group}>
            <input type="input" className={style.form__field} placeholder="Email" name="email" id="email" required />
            <label htmlFor="email" className={style.form__label}>Email</label>
          </div>
          <div className={style.form_group}>
            <input type="password" className={style.form__field} placeholder="Senha" name="senha" id="senha" required />
            <label htmlFor="senha" className={style.form__label}>Senha</label>
          </div>
          <div className={style.form_button}>
            <button type="submit" className={style.btn}>Entrar</button>
          </div>
          <div>
            <Link to="lembrarsenha" className={style.btn_link} type="button">
              lembrar
              {' '}
              <span> senha </span>
            </Link>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Login;
