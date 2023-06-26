import { createContext, useEffect, useState } from "react";
import { Getproducts } from "../Service/Api";
import { getProductById } from "../Service/Api";

export const Cartcontext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Getproducts().length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const Cart_length = Object.keys(cartItems).length;

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        console.log("ID", item);
        let itemInfo = getProductById(item);
        console.log(cartItems[item]);
        console.log(item.pricePurchase);
        totalAmount += cartItems[item] * itemInfo.pricePurchase;
      }
    }
    return totalAmount;
  };

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

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updatedCartItems[itemId] === 0) {
        delete updatedCartItems[itemId];
      }
      return updatedCartItems;
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
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
