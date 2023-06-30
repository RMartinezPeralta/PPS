import React, { useContext } from "react";
import { Cartcontext } from "./Cart_context";

const CartItem = ({ productData }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(Cartcontext);

  return (
    <div className="Cart_item_card">
      <div className="Cart_item_text">
        <h3>{productData.name}</h3>
        <p>Precio: ${productData.pricePurchase}</p>
      </div>

      <img className="Cart_card_img " src={productData.img} alt="Imagen no encontrada" />

      <div className="Cart_item_buttons">
        <button onClick={() => removeFromCart(productData.id)}> - </button>
        <p>{cartItems[productData.id]}</p>
        <button onClick={() => addToCart(productData.id)}> + </button>
      </div>
    </div>
  );
};

export default CartItem;
