import { render } from '@testing-library/react';
import App from '../../../App';

describe('Component Login', () => {
  test('deve iniciar com botões de cadastro ou de login ', () => {
    const { getByText } = render(<App />);
    // encontrar o botão iniciar sessão
    const botaoIniciarSessao = getByText('Entrar');

    // encontrar o botão criar conta
    const botaoCadastrar = getByText('Cadastrar');

    expect(botaoIniciarSessao).toBeInTheDocument();
    expect(botaoCadastrar).toBeInTheDocument();
  });
});
