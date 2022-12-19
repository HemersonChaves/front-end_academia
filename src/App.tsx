import { RouterProvider } from 'react-router-dom';
import { CreateRouter } from './router/CreateRoute';

function App() {
  return (
    <RouterProvider router={CreateRouter({ strategy: 'browser' })} />
  );
}

export default App;
