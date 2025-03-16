import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const Layout = () => {
  return (
    <div className="h-screen [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
