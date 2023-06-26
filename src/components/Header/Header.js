import LoginScreen from "../User/Login";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <h1 className="Header_text">Tienda de computacion</h1>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
