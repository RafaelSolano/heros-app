import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from '../../ui/components/NavBar';
import MarvelPage from '../pages/MarvelPage';
import DcPages from '../pages/DcPages';
import HeroPage from '../pages/HeroPage';
import SearchPage from '../pages/SearchPage';

const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPages />} />
          <Route path='hero' element={<HeroPage />} />
          <Route path='search' element={<SearchPage />} />


          <Route path='/*' element={<Navigate to={'/marvel'} />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
