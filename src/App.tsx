import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './presentation/Page/login';
import './style/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
