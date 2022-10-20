import { render } from '@testing-library/react';
import App from '../../../App';

describe('Component Login', () => {
  test('deve iniciar com botões de cadastro ou de login ', () => {
    const { getByRole } = render(<App />);
    // encontrar o botão iniciar sessão
    const botaoIniciarSessao = getByRole('button');

    // encontrar o botão criar conta
    const botaoIniciar = getByRole('button');

    expect(botaoIniciarSessao).toBeInTheDocument();
    expect(botaoIniciar).toBeInTheDocument();
  });
});
