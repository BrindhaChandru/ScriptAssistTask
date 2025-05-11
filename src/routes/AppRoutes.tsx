import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import ResourceList from '../pages/ResourceList';
import ResourceDetail from '../pages/ResourceDetail';
import { useAuthStore } from '../store/auth.store';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = useAuthStore((state) => state.token);
  return token ? children : <Navigate to="/login" />;
};

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/resources"
        element={
          <PrivateRoute>
            <ResourceList />
          </PrivateRoute>
        }
      />
      <Route
        path="/resources/:id"
        element={
          <PrivateRoute>
            <ResourceDetail />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
