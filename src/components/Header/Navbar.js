import { useNavigate } from "react-router-dom";
import Cart_button from "../Cart/Cart_button";

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <div className="NavBar">
      <button className="Button" onClick={() => Navigate("/home")}>
        Home
      </button>
      <button className="Button" onClick={() => Navigate("/Login")}>
        Login
      </button>

      <button className="Button" onClick={() => Navigate("/admin")}>
        Admin
      </button>
      <button className="Button" onClick={() => Navigate("/client")}>
        Client
      </button>
      <button className="Button" onClick={() => Navigate("/vendor")}>
        Vendedor
      </button>
      <Cart_button />
    </div>
  );
};

export default Navbar;
