import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Provider } from "jotai";
const Layout = () => {
  return (
    <Provider>
      <div className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Navbar />
        <Outlet />
        <Toaster position="bottom-right" />
      </div>
    </Provider>
  );
};

export default Layout;
