import LoginScreen from "../User/Login";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <h1 className="Header_text">FerreTech</h1>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
