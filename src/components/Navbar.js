import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <div className="NavBar">
      <h2>Navegacion</h2>

      <button className="Button" onClick={() => Navigate("/home")}>
        Home
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
    </div>
  );
};

export default Navbar;
