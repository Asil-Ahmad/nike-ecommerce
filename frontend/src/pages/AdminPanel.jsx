import React from "react";
import { adminLinks } from "../assets/icons";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className='container'>
      <h1 className='text-center font-anton text-4xl'>Welcome Admin</h1>

      <div>
        {adminLinks.map((item) => (
          <Link to={item.href} className=''>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
