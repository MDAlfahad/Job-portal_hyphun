import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ allowedRoles }) {
  const role = localStorage.getItem("role");
  if (!allowedRoles.includes(role)) {
   alert("You are restrected")
    return <Navigate to="/loginpage" />;
  }
  return <Outlet />;
}
export default ProtectedRoute;