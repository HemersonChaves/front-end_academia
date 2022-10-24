import {
  Route, Routes,
} from 'react-router-dom';

import Login from '../presentation/Page/login';
import NoMatch from '../presentation/Page/noMatch';
import NovoUsuario from '../presentation/Page/novousuario';

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="novousuario" element={<NovoUsuario />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
export default RoutesPages;
