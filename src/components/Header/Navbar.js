import { useNavigate } from "react-router-dom";
import Cart_button from "../Cart/Cart_button";
import { AuthContext } from "../User/Authcontext";
import { useContext } from "react";
import Logoff from "../User/Logoff";

const Navbar = () => {
  const Navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="NavBar">
      <button className="Button" onClick={() => Navigate("/home")}>
        Inicio
      </button>
      {currentUser.role !== 0 && (
        <button className="Button" onClick={() => Navigate("/account")}>
          Cuenta
        </button>
      )}
      {currentUser.role === 1 && (
        <button className="Button" onClick={() => Navigate("/admin")}>
          Administrador
        </button>
      )}
      {currentUser.role === 2 && (
        <button className="Button" onClick={() => Navigate("/vendor")}>
          Vendedor
        </button>
      )}
      {currentUser.role === 3 && (
        <button className="Button" onClick={() => Navigate("/client")}>
          Cliente
        </button>
      )}
      {currentUser.role === 0 ? (
        <button className="Button" onClick={() => Navigate("/Login")}>
          Login
        </button>
      ) : (
        <Logoff />
      )}

      <Cart_button />
    </div>
  );
};

export default Navbar;
