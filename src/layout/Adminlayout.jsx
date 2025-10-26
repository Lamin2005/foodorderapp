import { Outlet, useLocation } from "react-router-dom";
import AdminPage from "../pages/AdminPage";

const routeTitles = {
  "/dashboard": "Dashboard Overview",
  "/users": "User Managment",
  "/reports": "Reports",
};

const Adminlayout = () => {
  const location = useLocation();
  const currentTitle = routeTitles[location.pathname] || "Admin Panel";

  return (
  
      <Outlet />
   
  );
};

export default Adminlayout;
