import { Link } from 'react-router-dom';
import {
  Button, Container, Header, Nav, Panel,
} from '../../Components/Elements';
import style from './styles.module.css';

function Login() {
  const handle = () => { };
  return (
    <Container data-testid="login">
      <Nav path="/" />
      <Header>Entrar com email</Header>
      <Panel>
        <div className={style.form_control}>
          <div className={style.form_group}>
            <input type="input" className={style.form__field} placeholder="Email" name="email" id="email" required />
            <label htmlFor="email" className={style.form__label}>Email</label>
          </div>
          <div className={style.form_group}>
            <input type="password" className={style.form__field} placeholder="Senha" name="senha" id="senha" required />
            <label htmlFor="senha" className={style.form__label}>Senha</label>
          </div>
          <div className={style.form_group}>
            <Button type="submit" handleClick={handle}>Entrar</Button>
            <Link to="lembrarsenha" className={style.btn_link} type="button">
              lembrar
              <span> senha </span>
            </Link>
          </div>
        </div>
      </Panel>
    </Container>
  );
}

export default Login;
