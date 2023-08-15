import { Navigate, Route, Routes } from 'react-router-dom'
import MarvelPage from '../heroes/pages/MarvelPage'
import LoginPage from '../auth/pages/LoginPage'
import DcPages from '../heroes/pages/DcPages'
import NavBar from '../ui/components/NavBar'

const AppRouter = () => {
  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path="marvel" element={<MarvelPage/>} />
        <Route path="dc" element={<DcPages/>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to={'/marvel'}/>} />
        
      </Routes>
    </>
  )
}

export default AppRouter