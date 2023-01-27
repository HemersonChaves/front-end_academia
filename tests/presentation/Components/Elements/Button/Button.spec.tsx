import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../../../../../src/presentation/Components/Elements/Button';

describe('Componente <Button />', () => {
  const interacaoUsuario = userEvent.setup();

  test('deve iniciar com botão', () => {
    render(<Button>Teste</Button>);

    const button = screen.getByRole('button', { name: /Test/i });
    expect(button).toBeInTheDocument();
  });
  test('deve disparar um evento de click', async () => {
    const handleClicked = jest.fn();
    // const handleClicked = () => { console.log('hhh'); };
    render(<Button handleClick={handleClicked}>Teste</Button>);
    // encontrar o botão iniciar sessão
    const button = screen.getByRole('button', { name: /Test/i });

    await interacaoUsuario.click(button);
    expect(handleClicked).toHaveBeenCalledTimes(1);
  });
});
