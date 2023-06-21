import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="Main_page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
