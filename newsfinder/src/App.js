import { Route, Routes } from 'react-router';

import Header from './components/Header';
import Addressing from './pages/Addressing';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Addressing />} />
          <Route path='/buscador' element={<Addressing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    </div>
  );
}

export default App;