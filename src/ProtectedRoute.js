import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");

  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} state={{ location }} />
  );
};

export default ProtectedRoute;
