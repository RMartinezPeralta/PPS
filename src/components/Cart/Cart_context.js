import { createContext, useState } from "react";
import { getProductById } from "../Service/Api";

export const Cartcontext = createContext(null);

export const CartContextProvider = (props) => {
  // Los objetos del carro se almacenan con su ID mas su cantidad
  const [cartItems, setCartItems] = useState([]);
  const Cart_length = Object.keys(cartItems).length;

  // Calcula la suma del precio de cada item multiplicado por su cantidad
  const getTotalCartAmount = async () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        console.log("ID", item);
        let itemInfo = await getProductById(item);
        totalAmount += cartItems[item] * itemInfo.pricePurchase;
      }
    }
    return totalAmount;
  };
  // Añade un objeto (Su ID) al carro, o le suma 1 a su cantidad
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      const itemInfo = getProductById(itemId);

      if (itemInfo) {
        updatedItems[itemId] = (prev[itemId] ?? 0) + 1;
      }

      return updatedItems;
    });
  };
  // Remueve 1 de la cantidad de un objeto, o lo borra si la cantidad llega a 0
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updatedCartItems[itemId] === 0) {
        delete updatedCartItems[itemId];
      }
      return updatedCartItems;
    });
  };
  // Actualiza la cantidad de un objeto
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  // Vacia el carro, crea la orden de compra (Sin implementar)
  const checkout = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    Cart_length,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return <Cartcontext.Provider value={contextValue}>{props.children}</Cartcontext.Provider>;
};
