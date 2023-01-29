import Footer from "./Footer";
import HeroImage from "./HeroImage";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <HeroImage />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
