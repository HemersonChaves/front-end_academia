import Nav from '../../Components/nav';
import style from './styles.module.css';

function NovoUsuario() {
  return (
    <div className={style.container} data-testid="novo-usuario">
      <header>
        <Nav path="/" />
        <div className={style.heading}>
          <h1>Nova conta</h1>
        </div>
      </header>
      <section>
        <div className={style.form_group}>
          <input id="nome" name="nome" type="text" className={style.form_control} required />
          <label htmlFor="nome">Nome</label>
        </div>
        <div className={style.form_group}>
          <input id="email" name="email" type="email" className={style.form_control} required />
          <label htmlFor="email">Email</label>
        </div>
        <div className={style.form_group}>
          <input id="senha" name="senha" type="password" className={style.form_control} required />
          <label htmlFor="senha">Senha</label>
        </div>
        <div className={style.form_group}>
          <input id="confirmarsenha" name="confirmarsenha" type="password" className={style.form_control} required />
          <label htmlFor="confirmarsenha">Confirmar senha</label>
        </div>
        <div className={style.form_button}>
          <button type="submit" className={style.btn}>Cadastrar</button>
        </div>
      </section>
    </div>

  );
}
export default NovoUsuario;
