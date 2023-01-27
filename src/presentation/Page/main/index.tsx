import { useNavigate } from 'react-router-dom';
import { Container, Header } from '../../Components/Elements';
import Button from '../../Components/Elements/Button';
import style from './styles.module.css';

function Main() {
  const navigate = useNavigate();
  const handlePageCadastro = () => {
    navigate('novousuario');
  };
  const handlePageLogin = () => {
    navigate('login');
  };

  return (
    <Container>
      <Header title="Bem vindo ao Gymr" />
      <main className={style.main_login}>
        <div className={style.form_control}>
          <Button type="button" handleClick={handlePageLogin}>Entrar</Button>
          <Button type="button" handleClick={handlePageCadastro}>Cadastrar</Button>
        </div>
      </main>
    </Container>
  );
}
export default Main;
