import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import routesbuild from '../RouterConfig';

type RoutingStrategy = 'memory' | 'browser';
interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathName?: string[];
  initialIndex?: number
}

function CreateRouter({ strategy, initialPathName, initialIndex }: CreateRouterProps) {
  if (strategy === 'browser') {
    return createBrowserRouter([routesbuild]);
  }

  const initialEntries = initialPathName || ['/'];
  return createMemoryRouter([routesbuild], { initialEntries, initialIndex });
}

export { CreateRouter };
export type { RoutingStrategy };
