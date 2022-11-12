import { screen, render } from '@testing-library/react';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from '../../../src/presentation/Hook/authContext';

function TestComponent() {
  const { auth } = useContext(AuthContext);

  return (
    <AuthProvider>
      <span data-testid={`test-${auth.signed}`}>{`logado = ${auth.signed}`}</span>
    </AuthProvider>
  );
}

describe('component AuthContext', () => {
  test('deve ter o valor padrao de signed como falso', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('test-false')).toBeInTheDocument();
  });
});
