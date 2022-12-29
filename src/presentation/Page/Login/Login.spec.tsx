import { screen, render } from '@testing-library/react';
import * as ReactRouterDom from 'react-router-dom';
import { CreateRouter } from '../../../router/CreateRoute';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof ReactRouterDom>('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Component Page Login', () => {
  test('deve conter o elemento título', () => {
    render(<ReactRouterDom.RouterProvider router={CreateRouter({ strategy: 'memory', initialPathName: ['/', '/login'], initialIndex: 1 })} />);

    const h1Element = screen.getByRole('heading', {
      name: /entrar com email/i,
    });

    expect(h1Element).toBeInTheDocument();
  });
  test('deve conter um input text para o email com valor vazio', () => {
    render(<ReactRouterDom.RouterProvider router={CreateRouter({ strategy: 'memory', initialPathName: ['/', '/login'], initialIndex: 1 })} />);
    // encontrar o input no DOM
    const inputEmail = screen.getByPlaceholderText('Email');
    // garantir que o input esteja no documento
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
  });
});
