import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { rootPageRoutes } from '../RouterConfig';

function RoutesPages() {
  const rotas = createBrowserRouter(rootPageRoutes, { basename: '/' });
  return (
    <RouterProvider router={rotas} />
  );
}
export default RoutesPages;
