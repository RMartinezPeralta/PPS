import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../User/Authcontext";

const Layout = () => {
  const { rememberLogin } = useContext(AuthContext);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      console.log("Stored id: ", authToken);
      rememberLogin(authToken);
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
