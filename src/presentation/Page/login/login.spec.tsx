import { screen, render } from '@testing-library/react';
import App from '../../../App';

describe('Component Login', () => {
  test('deve conter o elemento título', () => {
    render(<App />);

    const h1Element = screen.getByRole('heading', {
      name: /bem vindo ao gymr/i,
    });

    expect(h1Element).toBeInTheDocument();
  });
  test('deve iniciar com botões de cadastro ou de login e lembrar senha ', () => {
    const { getByText } = render(<App />);
    // encontrar o botão iniciar sessão
    const botaoIniciarSessao = getByText('Entrar');

    // encontrar o botão criar conta
    const botaoCadastrar = getByText('Cadastrar');

    const botaoLembrarSenha = screen.getByRole(
      'link',
      {
        name: /lembrar senha/i,
      },
    );
    expect(botaoIniciarSessao).toBeInTheDocument();
    expect(botaoCadastrar).toBeInTheDocument();
    expect(botaoLembrarSenha).toBeInTheDocument();
  });
  test.todo('Testar se o botão redireciona para o cadastro de novo usuário');
  test.todo('Testar se o botão redireciona para area de login');
});
