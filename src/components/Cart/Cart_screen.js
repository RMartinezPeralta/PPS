import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "./Cart_context";
import { Getproducts } from "../Service/Api";
import CartItem from "./Cart_item";
import LoadingScreen from "../Loadingscreen";
import { AuthContext } from "../User/Authcontext";

const CartScreen = () => {
  const [loading, setLoading] = useState(true);
  const [articlesList, setArticlesList] = useState([]);
  const articleListHandler = (List) => {
    setArticlesList(List);
  };
  const { cartItems, checkout, getTotalCartAmount } = useContext(Cartcontext);
  const { currentUser, currentToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(null);
  const handleAmount = async () => {
    setTotalAmount(null);
    const newAmount = await getTotalCartAmount();
    setTotalAmount(newAmount);
  };

  const Cart_map = Object.keys(articlesList).map((key) => {
    const product = articlesList[key];
    if (cartItems.hasOwnProperty(product.id) && cartItems[product.id] !== 0) {
      return <CartItem key={product.id} productData={product} />;
    }
    return null;
  });

  const fetchData = async () => {
    setLoading(true);
    articleListHandler(await Getproducts());
    setLoading(false);
  };

  const handleCheckout = async (userId, Token, total) => {
    if (currentUser.Role !== 0) {
      console.log("Checkout ID: ", userId, "Checkout Token: ", Token);
      const orderData = {
        Userid: userId,
        total: total,
      };
      await checkout(orderData, Token);
    } else {
      alert("Debes iniciar sesion");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleAmount();
  }, [cartItems]);

  return (
    <div className="Cart_screen">
      <h2>Carrito de compras</h2>
      {loading === true ? (
        <LoadingScreen />
      ) : (
        <>
          {Object.keys(cartItems).length === 0 ? (
            <h3>El carrito esta vacio</h3>
          ) : (
            <div className="Cart_divider">
              <div className="Cart_items">{Cart_map}</div>
              <div className="Cart_options">
                {totalAmount !== null ? <p> Subtotal: ${totalAmount} </p> : <p>Cargando Subtotal...</p>}
                <button
                  className="Green_button"
                  onClick={() => {
                    handleCheckout(currentUser.id, currentToken, totalAmount);
                    navigate("/Purchase");
                  }}>
                  Comprar
                </button>
                <button className="Red_button" onClick={checkout}>
                  Cancelar Compra
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartScreen;
