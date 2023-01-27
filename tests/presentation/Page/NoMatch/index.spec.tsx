import { screen, render } from '@testing-library/react';
import * as ReactRouterDom from 'react-router-dom';
import { CreateRouter } from '../../../../src/router/CreateRoute';

describe('Component Page NoMactch', () => {
  test('deve conter erro 404', () => {
    render(<ReactRouterDom.RouterProvider router={CreateRouter({ strategy: 'memory', initialPathName: ['/badroute'], initialIndex: 0 })} />);

    const element = screen.getByRole('heading', {
      name: /erro 404/i,
    });
    // expect(screen.getByTestId('error-page')).toBeInTheDocument();
    expect(element).toBeInTheDocument();
  });
});
