import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Catalogo from './pages/Catalogo'
import Home from './pages/Home'
import ProductoDetalle from './pages/ProductoDetalle'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:slug" element={<ProductoDetalle />} />
      </Routes>
    </AuthProvider>
  )
}
