import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

function ProtectedRoute(protectedRoute: ProtectedRouteProps) {
  const { isAuthenticated, authenticationPath, outlet } = protectedRoute;
  if (isAuthenticated) {
    return outlet;
  }
  return <Navigate to={{ pathname: authenticationPath }} />;
}
export { ProtectedRoute };
export type { ProtectedRouteProps };
