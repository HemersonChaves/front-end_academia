import {
  Route, Routes,
} from 'react-router-dom';
import { ProtectedRoute, ProtectedRouteProps } from '../presentation/Components/RouteGuard';
import Login from '../presentation/Page/Login';

import Main from '../presentation/Page/main';
import NoMatch from '../presentation/Page/noMatch';
import NovoUsuario from '../presentation/Page/novousuario';

function RoutesPages() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: false,
    authenticationPath: '/login',
  };
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route
        path="dashboard"
        element={(
          <ProtectedRoute
            isAuthenticated={defaultProtectedRouteProps.isAuthenticated}
            authenticationPath={defaultProtectedRouteProps.authenticationPath}
            outlet={<Main />}
          />
        )}
      />
      <Route path="novousuario" element={<NovoUsuario />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
export default RoutesPages;
