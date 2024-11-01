import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const token = localStorage.getItem("token");
  // console.log("this", token);

  return token ? <Outlet /> : <Navigate to='/register' />;
};

export default Protected;
