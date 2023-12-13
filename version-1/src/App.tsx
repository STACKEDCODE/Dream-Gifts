import { Route, Routes } from '@solidjs/router';
import { useNavigate } from '@solidjs/router';

import Login from './views/Login';
import Home from './views/Home';
import Clientes from './views/Clientes';
import Productos from './views/Productos';
import Ventas from './views/Ventas';
import Entregas from './views/Entregas';
import Compras from './views/Compras';
import Usuarios from './views/Usuarios';

export default function App() {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');

    // if (!token && window.location.pathname !== '/login') {
    //     navigate('/login');
    // }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/compras" element={<Compras />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/entregas" element={<Entregas />} />
            <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
    )
}