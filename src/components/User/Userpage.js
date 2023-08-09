import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authcontext";
import { getOrderbyUserId } from "../Service/Api";
import Order from "./Order";

const Userpage = () => {
  const { currentUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]); // Initialize orders as an empty array

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const newOrders = await getOrderbyUserId(currentUser.id);
        setOrders(newOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [currentUser.id]); // Run the effect whenever currentUser.id changes

  const ordersMapped = orders.map((order) => <Order key={order.id} orderData={order} />);

  return (
    <div className="UserPage">
      <h2>Pagina de usuario</h2>
      <h3>
        Nombre: {currentUser.name} {currentUser.lastName}
      </h3>
      <h3>Email: {currentUser.email}</h3>
      <div className="Order_Container">{ordersMapped}</div>
    </div>
  );
};

export default Userpage;
