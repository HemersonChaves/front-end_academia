import { screen, render, waitFor } from '@testing-library/react';
import * as ReactRouterDom from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import RoutesPages from '../../../router/router';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof ReactRouterDom>('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Component Login', () => {
  const interacaoUsuario = userEvent.setup();
  test('deve conter o elemento título', () => {
    render(
      <ReactRouterDom.BrowserRouter>
        <RoutesPages />
      </ReactRouterDom.BrowserRouter>,
    );

    const h1Element = screen.getByRole('heading', {
      name: /bem vindo ao gymr/i,
    });

    expect(h1Element).toBeInTheDocument();
  });
  test('deve iniciar com botões de cadastro ou de login e lembrar senha ', () => {
    render(
      <ReactRouterDom.BrowserRouter>
        <RoutesPages />
      </ReactRouterDom.BrowserRouter>,
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
  test('deve redirecionar para página de erro 404', async () => {
    const badRoute = '/some/bad/route';

    // use <MemoryRouter> when you want to manually control the history
    render(
      <ReactRouterDom.MemoryRouter initialEntries={[badRoute]}>
        <RoutesPages />
      </ReactRouterDom.MemoryRouter>,
    );

    // verify navigation to "no match" route
    await waitFor(() => {
      expect(screen.getByText(/erro 404/i)).toBeInTheDocument();
    });
  });
  test('deve redireciona para o cadastro de novo usuário', async () => {
    render(
      <ReactRouterDom.BrowserRouter>
        <RoutesPages />
      </ReactRouterDom.BrowserRouter>,
    );
    // encontrar o botão iniciar sessão
    const botaoCadastrar = screen.getByText('Cadastrar');

    await interacaoUsuario.click(botaoCadastrar);
    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenNthCalledWith(1, 'novousuario');
    });
  });
  test.todo('Testar se o botão redireciona para area de login');
});
