import {
  Route, Routes,
} from 'react-router-dom';

import Main from '../presentation/Page/main';
import NoMatch from '../presentation/Page/noMatch';
import NovoUsuario from '../presentation/Page/novousuario';

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Main />} />
      <Route path="novousuario" element={<NovoUsuario />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
export default RoutesPages;
