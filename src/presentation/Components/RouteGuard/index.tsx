import { Navigate, resolvePath, useLocation } from 'react-router-dom';

type ProtectedRouteProps = {
  outlet: JSX.Element;
};

function ProtectedRoute(protectedRoute: ProtectedRouteProps) {
  const { outlet } = protectedRoute;
  const isAuthenticated = false;
  // chama alguma função de autenticação
  if (isAuthenticated) {
    return outlet;
  }
  return (
    <Navigate
      to="/login"
      replace
    />
  );
}
export { ProtectedRoute };
export type { ProtectedRouteProps };
