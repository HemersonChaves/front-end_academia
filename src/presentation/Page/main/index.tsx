import { useNavigate } from 'react-router-dom';
import { Container, Header, Panel } from '../../Components/Elements';
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
      <Header>
        Bem vindo
        <br />
        Gymr
      </Header>
      <Panel>
        <div className={style.form_control}>
          <Button type="button" handleClick={handlePageLogin}>Entrar</Button>
          <Button type="button" handleClick={handlePageCadastro}>Cadastrar</Button>
        </div>
      </Panel>
    </Container>
  );
}
export default Main;
