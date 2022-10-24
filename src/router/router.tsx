import {
  Route, Routes,
} from 'react-router-dom';

import Login from '../presentation/Page/login';
import NoMatch from '../presentation/Page/noMatch';

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
export default RoutesPages;
