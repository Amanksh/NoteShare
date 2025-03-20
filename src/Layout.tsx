import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
{
  /* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>; */
}
const Layout = () => {
  return (
    <div className="h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
