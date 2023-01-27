import { render, screen } from '@testing-library/react';
import Button from '../../../../../src/presentation/Components/Elements/Button';

describe('Componente <Button />', () => {
  test('deve iniciar com botão', () => {
    render(<Button>Teste</Button>);

    const inputNome = screen.getByRole('button', { name: /Test/i });
    expect(inputNome).toBeInTheDocument();
  });
});
