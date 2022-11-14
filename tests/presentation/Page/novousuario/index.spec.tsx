import { render, screen } from '@testing-library/react';
import NovoUsuario from '../../../../src/presentation/Page/novousuario';

describe('Componente <novousuario />', () => {
  test('deve iniciar com inputs de nome vazios', () => {
    render(<NovoUsuario />);

    const inputNome = screen.getByRole('textbox', { name: /Nome/i });
    expect(inputNome).toHaveValue('');
    expect(inputNome).toBeInTheDocument();
  });
});
