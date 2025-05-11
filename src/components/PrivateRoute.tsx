import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import { JSX } from "react";
import { ReactNode } from 'react';


interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}
