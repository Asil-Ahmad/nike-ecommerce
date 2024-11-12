import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const token = localStorage.getItem("token");
  // ("this", token);

  return token ? <Outlet /> : <Navigate to='/register' />;
};

export default Protected;
