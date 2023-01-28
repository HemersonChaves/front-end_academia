import {
  Button, Container, Header, Panel,
} from '../../Components/Elements';
import style from './styles.module.css';

function NovoUsuario() {
  const handle = () => { };
  return (
    <Container data-testid="novo-usuario">
      <Header>Nova conta</Header>
      <Panel>
        <div className={style.form_control}>
          <div className={style.form_group}>
            <input type="input" className={style.form__field} placeholder="Nome" name="nome" id="nome" required />
            <label htmlFor="nome" className={style.form__label}>Nome</label>
          </div>
          <div className={style.form_group}>
            <input type="input" className={style.form__field} placeholder="Email" name="email" id="email" required />
            <label htmlFor="email" className={style.form__label}>Email</label>
          </div>
          <div className={style.form_group}>
            <input type="password" className={style.form__field} placeholder="Senha" name="senha" id="senha" required />
            <label htmlFor="senha" className={style.form__label}>Senha</label>
          </div>
          <div className={style.form_group}>
            <input type="password" className={style.form__field} placeholder="Confirmar senha" name="confirmarsenha" id="confirmarsenha" required />
            <label htmlFor="confirmarsenha" className={style.form__label}>Confirmar senha</label>
          </div>
          <div className={style.form_group}>
            <Button type="submit" handleClick={handle}>Novo</Button>
          </div>
        </div>
      </Panel>
    </Container>
  );
}
export default NovoUsuario;
