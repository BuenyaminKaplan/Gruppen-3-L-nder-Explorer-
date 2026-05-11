import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import NotFound from './pages/NotFound';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:code" element={<CountryDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
