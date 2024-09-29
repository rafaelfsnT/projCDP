import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Usuarios from './pages/Usuarios'
import GerenciarUsuarios from './pages/Usuarios/Gerenciar'
import Historicos from './pages/Historicos'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/dashboard'
                    element={<Dashboard />}
                />

                <Route
                    path='/'
                    element={<Login />}
                />


                <Route
                    path='/usuarios'
                    element={<Usuarios />}
                />

                <Route
                    path='/usuarios/:id'
                    element={<GerenciarUsuarios />}
                />
                <Route 
                path= '/historicos'
                element={<Historicos />}
                />

             
            </Routes>
        </BrowserRouter>
    )
}