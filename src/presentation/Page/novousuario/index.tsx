import style from './styles.module.css';

function NovoUsuario() {
  return (

    <div className={style.container} data-testid="novo-usuario">
      <header>
        <nav className={style.navigation}>
          <a href="/">
            <i className="las la-lg la-angle-left" />
          </a>
        </nav>
        <div className={style.heading}>
          <h1>Criar nova</h1>
        </div>
      </header>
      <section>
        <div className={style.form_group}>
          <input id="nome" type="text" className={style.form_control} required />
          <label htmlFor="nome">Usuário</label>
        </div>
        <div className={style.form_group}>
          <input id="email" type="email" className={style.form_control} required />
          <label htmlFor="email">Email</label>
        </div>
        <div className={style.form_group}>
          <input id="senha" type="password" className={style.form_control} required />
          <label htmlFor="senha">Senha</label>
        </div>
        <div className={style.form_group}>
          <input id="confirmacao-senha" type="password" className={style.form_control} required />
          <label htmlFor="confirmacao-senha">Confirmação de senha</label>
        </div>
        <div className={style.form_button}>
          <button type="submit" className={style.btn}>Cadastrar</button>
        </div>
      </section>
    </div>

  );
}
export default NovoUsuario;
