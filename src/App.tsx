// src/App.tsx
import {  Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { useAuthStore } from './store/auth.store';
import LoginPage from './pages/Login';
import ResourceList from './pages/ResourceList';
import ResourceDetail from './pages/ResourceDetail';
import EnrichedResourceDetail from './pages/EnrichedResourceDetail';
import PrivatePage from './pages/PrivatePage';

export default function App() {
  const token = useAuthStore((state) => state.token);
  const isAuthenticated = Boolean(token);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/resources" element={<PrivateRoute><ResourceList /></PrivateRoute>} />
      <Route path="/resource/:id" element={<PrivateRoute><ResourceDetail /></PrivateRoute>} />
      <Route path="/resource/:id/enriched" element={<PrivateRoute><EnrichedResourceDetail /></PrivateRoute>} />
      <Route path="/private" element={<PrivatePage />} />

    </Routes>
  );
}
