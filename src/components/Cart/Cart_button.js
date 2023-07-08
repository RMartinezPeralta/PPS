import { useNavigate } from "react-router-dom";
import { Cartcontext } from "./Cart_context";
import { useContext } from "react";

const CartButton = () => {
  const navigate = useNavigate();
  const { Cart_length } = useContext(Cartcontext);

  const handleClick = () => {
    navigate("/Cart");
  };

  return (
    <button className={`Cart_button ${Cart_length > 0 ? "Cart_active" : ""}`} onClick={handleClick}>
      <img className="Cart_img" src={"https://i.imgur.com/RwQv9CW.png"} alt="Imagen no encontrada" />
    </button>
  );
};

export default CartButton;
