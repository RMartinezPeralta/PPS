import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="Layout">
      <div className="Content">
        <Header />
        <div className="Main_page">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
