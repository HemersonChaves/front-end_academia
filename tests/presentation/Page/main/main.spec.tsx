import { screen, render, waitFor } from '@testing-library/react';
import * as ReactRouterDom from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { CreateRouter } from '../../../../src/router/CreateRoute';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof ReactRouterDom>('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Component Page inicial', () => {
  const interacaoUsuario = userEvent.setup();
  test('deve conter o elemento título', () => {
    render(<ReactRouterDom.RouterProvider router={CreateRouter({ strategy: 'browser' })} />);

    const h1Element = screen.getByRole('heading', {
      name: /bem vindo ao gymr/i,
    });

    expect(h1Element).toBeInTheDocument();
  });
  test('deve iniciar com botões de cadastro ou de login e lembrar senha ', () => {
    render(<ReactRouterDom.RouterProvider router={CreateRouter({ strategy: 'browser' })} />);
    // encontrar o botão iniciar sessão
    const botaoEntrar = screen.getByText('Entrar');

    // encontrar o botão criar conta
    const botaoCadastrar = screen.getByText('Cadastrar');

    const botaoLembrarSenha = screen.getByRole(
      'link',
      {
        name: /lembrar senha/i,
      },
    );
    expect(botaoEntrar).toBeInTheDocument();
    expect(botaoCadastrar).toBeInTheDocument();
    expect(botaoLembrarSenha).toBeInTheDocument();
  });
  test('deve redireciona para o cadastro de novo usuário', async () => {
    render(<ReactRouterDom.RouterProvider router={CreateRouter({ strategy: 'browser' })} />);
    // encontrar o botão iniciar sessão
    const botaoCadastrar = screen.getByText('Cadastrar');

    await interacaoUsuario.click(botaoCadastrar);
    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenNthCalledWith(1, 'novousuario');
    });
  });
  test('deve redireciona para area de login', async () => {
    render(<ReactRouterDom.RouterProvider router={CreateRouter({ strategy: 'browser' })} />);
    // encontrar o botão iniciar sessão
    const botaoEntrar = screen.getByText('Entrar');

    await interacaoUsuario.click(botaoEntrar);
    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenNthCalledWith(1, 'login');
    });
  });
});
