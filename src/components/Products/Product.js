import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../Cart/Cart_context";
import { deleteProduct } from "../Service/Api";
import { AuthContext } from "../User/Authcontext";

const Product = ({ productData }) => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(Cartcontext);
  const { currentUser, currentToken } = useContext(AuthContext);
  const cartItemCount = cartItems[productData.id];

  // Llama a router con un url unico en base al ID del producto
  const detailsScreen = () => {
    navigate(`/products/${productData.id}`);
  };

  // El boton de borrado solo se renderiza si el usuario actual es de Rol Vendor (Rol Id 2)
  const handleDelete = () => {
    const confirmDelete = window.confirm("¿Estas seguro que quieres borrar este producto?");
    if (confirmDelete) {
      deleteProduct(productData.id, currentToken);
    }
  };

  return (
    <div className="product_card">
      <div className="Product_card_img" onClick={detailsScreen}>
        <img className="Image" src={productData.img} alt="Imagen no encontrada" />
      </div>
      <div className="product_card_text">
        <h3>{productData.name}</h3>
        <p>Precio: ${productData.pricePurchase}</p>
      </div>
      <button className="Green_button" onClick={() => addToCart(productData.id)}>
        Agregar al carro {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      {currentUser.role === 2 && (
        <button className="Red_button" onClick={handleDelete}>
          Borrar
        </button>
      )}
    </div>
  );
};

export default Product;
