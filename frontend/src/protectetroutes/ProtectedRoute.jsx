import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ allowedRoles }) {
  const role = localStorage.getItem("role");
  if (!allowedRoles.includes(role)) {
   alert("You are restrected")
    return <Navigate to="/login-page" />;
  }
  return <Outlet />;
}
export default ProtectedRoute;