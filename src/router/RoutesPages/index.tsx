import { createBrowserRouter, createMemoryRouter, RouterProvider } from 'react-router-dom';
import routesbuild from '../RouterConfig';

export type RoutingStrategy = 'memory' | 'browser';
interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
}

export function createRouter({ strategy, initialPathname }: CreateRouterProps) {
  if (strategy === 'browser') {
    return createBrowserRouter([routesbuild]);
  }

  const initialEntries = [initialPathname || '/'];
  return createMemoryRouter([routesbuild], { initialEntries });
}

function RoutesPages() {
  const rotas = createRouter({ strategy: 'browser' });
  return (
    <RouterProvider router={rotas} />
  );
}
export default RoutesPages;
