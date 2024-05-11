import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ token }) {
    return token ? <Outlet /> : <Navigate to="/" />;
}