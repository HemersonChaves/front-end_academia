import { render, screen } from '@testing-library/react';
import NovoUsuario from '../../../../src/presentation/Page/Novousuario';

describe('Componente <NovoUsuario />', () => {
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

    const inputSenha = screen.getByLabelText(/Senha/);
    expect(inputSenha).toHaveValue('');
    expect(inputSenha).toBeInTheDocument();
  });
  test('deve iniciar com inputs de confirmar senha vazios', () => {
    render(<NovoUsuario />);

    const inputConfirmacaoSenha = screen.getByLabelText(/Confirmar senha/);
    expect(inputConfirmacaoSenha).toHaveValue('');
    expect(inputConfirmacaoSenha).toBeInTheDocument();
  });
});
