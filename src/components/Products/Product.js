import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../Cart/Cart_context";

const Product = ({ productData }) => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(Cartcontext);
  const cartItemCount = cartItems[productData.id];

  const detailsScreen = () => {
    navigate(`/products/${productData.id}`);
  };

  return (
    <div className="product_card">
      <div className="Product_card_img" onClick={detailsScreen}>
        <img className="Image" src={productData.img} alt="Imagen no encontrada" />
      </div>
      <div className="product_card_text">
        <h3>{productData.name}</h3>
        <p>Precio: ${productData.price}</p>
        <button className="Buy_button" onClick={() => addToCart(productData.id)}>
          Agregar al carro {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
