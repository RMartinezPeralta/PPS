import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../User/Authcontext";

const Layout = () => {
  const { rememberLogin } = useContext(AuthContext);

  useEffect(() => {
    const storedLogin = localStorage.getItem("LoginData");
    if (storedLogin) {
      rememberLogin(storedLogin);
    }
  }, []);
  return (
    <div className="Layout">
      <Header />
      <div className="Main_page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
