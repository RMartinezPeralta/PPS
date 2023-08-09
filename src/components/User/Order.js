import React, { useState, useEffect } from "react";
import { getOrderItemsByOrderId } from "../Service/Api";
import OrderItem from "./OrderItem";

const Order = ({ orderData }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    getOrderItemsByOrderId(orderData.id)
      .then((items) => {
        setOrderItems(items);
        setIsLoading(false); // Set loading state to false when fetch is complete
      })
      .catch((error) => {
        console.error("Error fetching order items:", error);
        setIsLoading(false); // Set loading state to false in case of error
      });
  }, [orderData.id]);

  const itemsMapped = orderItems.map((Item) => <OrderItem key={Item.id} Item={Item} />);

  const toggleItemsVisibility = () => {
    if (!isLoading) {
      setShowItems(!showItems); // Toggle the showItems state only if not loading
    }
  };

  return (
    <div className="Order">
      <h3>ID de la compra: {orderData.id}</h3>
      <button
        className="Green_button"
        onClick={toggleItemsVisibility}
        disabled={isLoading} // Disable the button while loading
      >
        {isLoading ? "Loading..." : showItems ? "Ocultar" : "Ver"}
      </button>
      {showItems && (
        <div className="Order_Products_Container">
          <h4>Productos:</h4>
          {itemsMapped}
        </div>
      )}
      <h4>Total: ${orderData.total}</h4>
    </div>
  );
};

export default Order;
