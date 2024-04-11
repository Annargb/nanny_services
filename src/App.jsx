import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout';

const Home = lazy(() => import('./pages/Home'));
const Nannies = lazy(() => import('./pages/Nannies'));
const Favorites = lazy(() => import('./pages/Favorites'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="nannies" element={<Nannies />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
