import { screen, render, waitFor } from '@testing-library/react';
import {
  useLocation,
} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import RoutesPages from '../../../router/router';

describe('Component Login', () => {
  test('deve conter o elemento título', () => {
    render(<RoutesPages />);

    const h1Element = screen.getByRole('heading', {
      name: /bem vindo ao gymr/i,
    });

    expect(h1Element).toBeInTheDocument();
  });
  test('deve iniciar com botões de cadastro ou de login e lembrar senha ', () => {
    render(<RoutesPages />);
    // encontrar o botão iniciar sessão
    const botaoIniciarSessao = screen.getByText('Entrar');

    // encontrar o botão criar conta
    const botaoCadastrar = screen.getByText('Cadastrar');

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
  test('deve redireciona para o cadastro de novo usuário', async () => {
    render(<RoutesPages />);
    // encontrar o botão iniciar sessão
    const botaoCadastrar = screen.getByText('Cadastrar');

    await userEvent.click(botaoCadastrar);
    // toMatchSnapshot()

    await waitFor(() => {
      expect(botaoCadastrar).toHaveAttribute('href', '/cadastro');
    });
  });
  // test('Testar ', async () => {
  //   const { container, debug } = render(<RoutesPages />);
  //   debug();

  //   const botaoCadastrar = screen.getByText('Cadastrar');
  //   // expect(botaoCadastrar).toHaveAttribute('href', '/cadastro');

  //   await userEvent.click(botaoCadastrar);
  //   // toMatchSnapshot()

  //   // await waitFor(() => {
  //   //   expect(container).toHave;
  //   // });
  // });
  test.todo('Testar se o botão redireciona para area de login');
});
