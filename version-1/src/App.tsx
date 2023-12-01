import { Route, Routes } from '@solidjs/router';
import { useNavigate } from '@solidjs/router';

import Login from './views/Login';

export default function App() {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');

    // if (!token && window.location.pathname !== '/login') {
    //     navigate('/login');
    // }

    return (
        <main>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    )
}