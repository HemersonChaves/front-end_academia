import React, { ReactNode } from 'react';
import { Outlet, Path, RouteObject } from 'react-router-dom';
import { ProtectedRouteProps, ProtectedRoute } from '../../presentation/Components';
import { NovoUsuario, NoMatch, Main } from '../../presentation/Page';
import Login from '../../presentation/Page/Login';

enum RoutesPath {
  MAIN = '/',
  LOGIN = 'login',
  NOVOUSUARIO = 'novousuario',
  DASHBOARD = 'dashboard',
}
function routesWithPaths(path: string, element: ReactNode): RouteObject {
  return {
    path,
    element,
  };
}
function createRouterPath(routes: RouteObject[]): RouteObject[] {
  routes.push(routesWithPaths(RoutesPath.MAIN, <Main />));
  routes.push(routesWithPaths(RoutesPath.LOGIN, <Login />));
  routes.push(routesWithPaths(RoutesPath.NOVOUSUARIO, <NovoUsuario />));
  routes.push(routesWithPaths(RoutesPath.DASHBOARD, <ProtectedRoute outlet=<Main /> />));
  return routes;
}

const a: RouteObject[] = [{ errorElement: <NoMatch /> }];

export const rootPageRoutes: RouteObject[] = [{
  path: '/',
  element: <Outlet />,
  errorElement: <NoMatch />,
  children: createRouterPath(a),
}];

export default { rootPageRoutes };
