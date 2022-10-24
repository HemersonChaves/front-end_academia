import { screen, render, waitFor } from '@testing-library/react';
import {
  MemoryRouter,
  useLocation,
} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import RoutesPages from '../../../router/router';

describe('Component Login', () => {
  test('deve conter o elemento título', () => {
    render(
      <MemoryRouter>
        <RoutesPages />
      </MemoryRouter>,
    );

    const h1Element = screen.getByRole('heading', {
      name: /bem vindo ao gymr/i,
    });

    expect(h1Element).toBeInTheDocument();
  });
  test('deve iniciar com botões de cadastro ou de login e lembrar senha ', () => {
    render(
      <MemoryRouter>
        <RoutesPages />
      </MemoryRouter>,
    );
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
    render(
      <MemoryRouter>
        <RoutesPages />
      </MemoryRouter>,
    );
    const handlePageCadastro = jest.spyOn(console, 'log');
    // encontrar o botão iniciar sessão
    const botaoCadastrar = screen.getByText('Cadastrar');

    await userEvent.click(botaoCadastrar);
    // toMatchSnapshot()
    await waitFor(() => {
      expect(handlePageCadastro).toHaveBeenCalled();
      // expect(botaoCadastrar).toHaveAttribute('href', '/cadastro');
    });
  });
  // test('deve redirecionar para página de erro 404', async () => {
  //   const badRoute = '/some/bad/route';

  //   // use <MemoryRouter> when you want to manually control the history
  //   render(
  //     <MemoryRouter initialEntries={[badRoute]}>
  //       <RoutesPages />
  //     </MemoryRouter>,
  //   );

  //   // verify navigation to "no match" route
  //   await waitFor(() => {
  //     expect(screen.getByText(/erro 404/i)).toBeInTheDocument();
  //   });
  // });
  test.todo('Testar se o botão redireciona para area de login');
});
