import { render, screen } from '@testing-library/react';
import NovoUsuario from '../../../../src/presentation/Page/novousuario';

describe('Componente <novousuario />', () => {
  test('deve iniciar com inputs de nome vazios', () => {
    render(<NovoUsuario />);

    const inputNome = screen.getByRole('textbox', { name: /Nome/i });
    expect(inputNome).toHaveValue('');
    expect(inputNome).toBeInTheDocument();
  });
  test('deve iniciar com inputs de email vazios', () => {
    render(<NovoUsuario />);

    const inputEmail = screen.getByRole('textbox', { name: /Email/i });
    expect(inputEmail).toHaveValue('');
    expect(inputEmail).toBeInTheDocument();
  });
  test('deve iniciar com inputs de senha vazios', () => {
    render(<NovoUsuario />);

    const inputSenha = screen.getByRole('textbox', { name: /Email/i });
    expect(inputSenha).toHaveValue('');
    expect(inputSenha).toBeInTheDocument();
  });
});
