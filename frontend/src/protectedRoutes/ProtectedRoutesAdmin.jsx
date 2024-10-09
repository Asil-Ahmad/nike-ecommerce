import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdmin = () => {

  const isAdmin = localStorage.getItem("isAdmin");

  return isAdmin ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedAdmin;
